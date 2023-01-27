from django.urls import path
from .views import UserView, UserAuthenticatedView


urlpatterns = [
    # Users
    path('register', UserView.as_view({'post': 'register'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('user', UserAuthenticatedView.as_view({'get': 'getUser'})),
    # path('logout', UserAuthenticatedView.as_view({'get': 'logout'})),
]
