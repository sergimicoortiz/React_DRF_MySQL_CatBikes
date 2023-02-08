from django.urls import path
from .views import IncidentView

urlpatterns = [
    path('incidents', IncidentView.as_view({"get": "get"})),
    path('incidents', IncidentView.as_view({"post": "post"})),
]
