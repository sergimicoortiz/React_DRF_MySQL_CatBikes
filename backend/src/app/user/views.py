from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from .models import User


class UserView(viewsets.GenericViewSet):
    def register(self, request):
        return Response({'a': 'register'})

    def login(self, request):
        return Response({'a': 'login'})
