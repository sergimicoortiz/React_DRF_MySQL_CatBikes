from django.urls import path
from .views import RentAuthenticatedView

urlpatterns = [
    path('rent', RentAuthenticatedView.as_view({"post": "rent"})),
]
