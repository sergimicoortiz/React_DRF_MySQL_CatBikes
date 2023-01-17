from django.urls import path
from .views import StationView

urlpatterns = [
    path('station', StationView.as_view()),
    path('station/<str:slug>', StationView.as_view()),
]
