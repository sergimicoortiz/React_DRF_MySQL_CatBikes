from django.urls import path
from .views import IncidentView

urlpatterns = [
    path('incidents', IncidentView.as_view({"get": "get"})),
    path('incidents/<str:slug>', IncidentView.as_view({"get": "get"})),
    path('incidents/<str:slug>', IncidentView.as_view({"put": "put"})),
    path('incidents/<str:slug>', IncidentView.as_view({"delete": "delete"})),
    path('incidents', IncidentView.as_view({"post": "post"})),
]
