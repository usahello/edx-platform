from django.apps import AppConfig


class USAHelloFeatures(AppConfig):
    name = 'openedx.features.usahello_features'

    def ready(self):
        super(USAHelloFeatures, self).ready()
        from openedx.features.usahello_features.forms import ExtraInfoForm
