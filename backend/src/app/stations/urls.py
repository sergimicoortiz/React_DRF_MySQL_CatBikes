from django.urls import path
from .views import StationView

urlpatterns = [
    path('station', StationView.as_view({'get': 'get'})),
    path('station', StationView.as_view({'post': 'post'})),
    path('station/<str:slug>', StationView.as_view({'get': 'get'})),
    path('station/<str:slug>', StationView.as_view({'delete': 'delete'})),
    path('station/<str:slug>', StationView.as_view({'put': 'put'})),
]
