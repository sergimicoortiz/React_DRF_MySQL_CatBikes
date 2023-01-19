from django.urls import path
from .views import StationView
from .views import BikeView

urlpatterns = [
    path('station', StationView.as_view({'get': 'get'})),
    path('station', StationView.as_view({'post': 'post'})),
    path('station/<str:slug>', StationView.as_view({'get': 'get'})),
    path('station/<str:slug>', StationView.as_view({'delete': 'delete'})),
    path('station/<str:slug>', StationView.as_view({'put': 'put'})),
    path('bikes', BikeView.as_view({"get":"get"})),
    path('bikes/<str:slug>', BikeView.as_view({"get":"get"})),
    path('bikes', BikeView.as_view({"post":"post"})),
    path('bikes/<str:slug>', BikeView.as_view({"put":"put"})),
    path('bikes/<str:slug>', BikeView.as_view({"delete":"delete"})),  
]
