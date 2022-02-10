from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.translation import ugettext_noop

# Backwards compatible settings.AUTH_USER_MODEL
USER_MODEL = getattr(settings, 'AUTH_USER_MODEL', 'auth.User')


class ExtraInfo(models.Model):
    """
    This model contains two extra fields that will be saved when a user registers.
    The form that wraps this model is in the forms.py file.
    """
    user = models.OneToOneField(USER_MODEL, on_delete=models.CASCADE, null=True)
    STUDENT_INTENTION = (
        ('yes', ugettext_noop('Yes')),
        ("looking", ugettext_noop("No, I'm just looking")),
        ('unsure', ugettext_noop('Not sure')),
    )

    student_intention = models.CharField(
        verbose_name=_(u'Do you plan to complete this class?'),
        choices=STUDENT_INTENTION,
        blank=True,
        max_length=7,
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.user.username
