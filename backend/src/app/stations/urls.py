from django.urls import path
from .views import BikeView

urlpatterns = [
    path('bikes', BikeView.as_view({"get":"get"})),
    path('bikes/<int:pk>', BikeView.as_view({"get":"get"})),
    path('bikes', BikeView.as_view({"post":"post"})),
    path('bikes/<int:pk>', BikeView.as_view({"put":"put"})),
    path('bikes/<int:pk>', BikeView.as_view({"get":"get"})),    
]