from django.apps import AppConfig

class StationsAppConfig(AppConfig):
    name = 'src.app.stations'
    label = 'stations'
    verbose_name = 'Stations'

    def ready(self):
        import src.app.stations.signals


default_app_config = 'ssrc.app.stations.StationsAppConfig'
