from django.urls import path
from .views import UserView


urlpatterns = [
    # Users
    path('login', UserView.as_view({'post': 'login'})),
    path('register', UserView.as_view({'post': 'register'})),
]
