from django.forms import ModelForm

from openedx.features.usahello_features.models import ExtraInfo


class ExtraInfoForm(ModelForm):
    """
    The fields on this form are derived from the ExtraInfo model in models.py.
    """
    def __init__(self, *args, **kwargs):
        super(ExtraInfoForm, self).__init__(*args, **kwargs)

    class Meta(object):
        model = ExtraInfo
        fields = ('student_intention', )
