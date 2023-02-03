from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.exceptions import NotFound
from .models import Rent
from .serializers import RentSerializer

from rest_framework.permissions import (IsAuthenticated)


class RentAuthenticatedView(viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]