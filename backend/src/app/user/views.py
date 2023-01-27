from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.exceptions import NotFound
from .models import User
from .serializers import userSerializer


class UserView(viewsets.GenericViewSet):
    def register(self, request):
        data = request.data['user']

        if data['email'] is None:
            raise NotFound("Email is required!")

        if data['password'] is None:
            raise NotFound("Password is required!")

        if data['username'] is None:
            raise NotFound("Username is required!")

        serializer_context = {
            'email': data['email'],
            'password': data['password'],
            'username': data['username']
        }

        serializer = userSerializer.register(serializer_context)
        return Response(serializer)

    def login(self, request):
        data = request.data['user']

        if data['password'] is None:
            raise NotFound("Password is required!")

        if data['username'] is None:
            raise NotFound("Username is required!")

        serializer_context = {
            'username': data['username'],
            'password': data['password']
        }
        serializer = userSerializer.login(serializer_context)
        return Response(serializer)
