from django.urls import path
from .views import BikeView

urlpatterns = [
    path('bikes', BikeView.as_view()),
]