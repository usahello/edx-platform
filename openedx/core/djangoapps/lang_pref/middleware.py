"""
Middleware for Language Preferences
"""
import json

from django.conf import settings
from django.contrib import auth
from django.utils.deprecation import MiddlewareMixin
from django.urls import reverse
from django.utils.translation import LANGUAGE_SESSION_KEY
from django.utils.translation.trans_real import parse_accept_lang_header

from openedx.core.djangoapps.dark_lang.models import DarkLangConfig
from openedx.core.djangoapps.lang_pref import COOKIE_DURATION, LANGUAGE_HEADER, LANGUAGE_KEY
from openedx.core.djangoapps.user_api.errors import UserAPIInternalError, UserAPIRequestError
from openedx.core.djangoapps.user_api.preferences.api import get_user_preference, set_user_preference
from openedx.core.lib.mobile_utils import is_request_from_mobile_app


class LanguagePreferenceMiddleware(MiddlewareMixin):
    """
    Middleware for user preferences.

    Ensures that, once set, a user's preferences are reflected in the page
    whenever they are logged in.
    """

    def _is_preferences_api_call_for_language(self, request):
        try:
            data = json.loads(request.body.decode('utf8'))
            return data.get(LANGUAGE_KEY, False)
        except json.JSONDecodeError:
            return False

    def _should_surpass_custom_lang(self, request):
        pref_lang = self._is_preferences_api_call_for_language(request)
        if (reverse('session_language') in request.path
           or (request.user.is_authenticated
           and reverse('preferences_api', kwargs={'username': request.user.username}) in request.path
           and pref_lang)):
            request.session['surpass_custom_lang'] = True
        return pref_lang

    def _handle_custom_language(self, request, custom_lang):
        # import pdb; pdb.set_trace()

        expected_surpass_custom_lang_value = None
        if request.session.get('surpass_custom_lang'):
            expected_surpass_custom_lang_value = False

        if not 'surpass_custom_lang' in request.session:
            request.session['surpass_custom_lang'] = False

        pref_lang = self._should_surpass_custom_lang(request)

        if (custom_lang and not request.session['surpass_custom_lang']
            and custom_lang in DarkLangConfig.current().released_languages_list):
            request.session['custom_lang'] = custom_lang
        elif (not 'custom_lang' in request.session or request.session.get('surpass_custom_lang')):
            if pref_lang:
                request.session['custom_lang'] = pref_lang
            else:
                request.session['custom_lang'] = request.COOKIES.get(settings.LANGUAGE_COOKIE, None)

        if not expected_surpass_custom_lang_value is None:
            request.session['surpass_custom_lang'] = False


    def process_request(self, request):
        """
        If a user's UserPreference contains a language preference, use the user's preference.
        Save the current language preference cookie as the user's preferred language.
        """
        custom_lang = request.GET.get('custom_lang')

        self._handle_custom_language(request, custom_lang)
        cookie_lang = request.session.get('custom_lang')

        if cookie_lang:
            if request.user.is_authenticated:
                set_user_preference(request.user, LANGUAGE_KEY, cookie_lang)
            else:
                request._anonymous_user_cookie_lang = cookie_lang  # lint-amnesty, pylint: disable=protected-access

            accept_header = request.META.get(LANGUAGE_HEADER, None)
            if accept_header:
                current_langs = parse_accept_lang_header(accept_header)
                # Promote the cookie_lang over any language currently in the accept header
                current_langs = [(lang, qvalue) for (lang, qvalue) in current_langs if lang != cookie_lang]
                current_langs.insert(0, (cookie_lang, 1))
                accept_header = ",".join(f"{lang};q={qvalue}" for (lang, qvalue) in current_langs)
            else:
                accept_header = cookie_lang
            request.META[LANGUAGE_HEADER] = accept_header

            # Allow the new cookie setting to update the language in the user's session
            if LANGUAGE_SESSION_KEY in request.session and request.session[LANGUAGE_SESSION_KEY] != cookie_lang:
                del request.session[LANGUAGE_SESSION_KEY]

    def process_response(self, request, response):  # lint-amnesty, pylint: disable=missing-function-docstring
        # If the user is logged in, check for their language preference. Also check for real user
        # if current user is a masquerading user,
        user_pref = None
        current_user = None
        if hasattr(request, 'user'):
            current_user = getattr(request.user, 'real_user', request.user)

        if current_user and current_user.is_authenticated:
            # import pdb; pdb.set_trace()
            anonymous_cookie_lang = getattr(request, '_anonymous_user_cookie_lang', None)
            if anonymous_cookie_lang:
                user_pref = anonymous_cookie_lang
                set_user_preference(current_user, LANGUAGE_KEY, anonymous_cookie_lang)
            else:
                # Get the user's language preference
                try:
                    user_pref = get_user_preference(current_user, LANGUAGE_KEY)
                except (UserAPIRequestError, UserAPIInternalError):
                    # If we can't find the user preferences, then don't modify the cookie
                    pass

            # If set, set the user_pref in the LANGUAGE_COOKIE
            if user_pref and not is_request_from_mobile_app(request):
                response.set_cookie(
                    settings.LANGUAGE_COOKIE,
                    value=user_pref,
                    domain=settings.SESSION_COOKIE_DOMAIN,
                    max_age=COOKIE_DURATION,
                    secure=request.is_secure()
                )
            else:
                response.delete_cookie(
                    settings.LANGUAGE_COOKIE,
                    domain=settings.SESSION_COOKIE_DOMAIN
                )

        return response
