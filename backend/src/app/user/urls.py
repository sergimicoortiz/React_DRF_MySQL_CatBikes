from django.urls import path
from .views import UserView, UserInfoViews


urlpatterns = [
    # Users
    path('register', UserView.as_view({'post': 'register'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('user', UserInfoViews.as_view({'get': 'getUser'})),
]
