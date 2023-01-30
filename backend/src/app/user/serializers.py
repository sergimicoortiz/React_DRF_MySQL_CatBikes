from rest_framework import serializers
from .models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email', 'username', 'types')

    def getUser(context):
        username = context['username']
        if username is None:
            raise serializers.ValidationError(
                'username is not find'
            )
        user = User.objects.get(username=username)

        return {
            'user': {
                'username': user.username,
                'email': user.email,
                'types': user.types
            },
        }

    def register(context):

        email = context['email']
        password = context['password']
        username = context['username']

        username_exist = len(User.objects.filter(username=username))
        email_exist = len(User.objects.filter(email=email))
        if (email_exist > 0 or username_exist > 0):
            raise serializers.ValidationError(
                'Useror Email with this username already exists.'
            )

        user = User.objects.create_user(
            email=email,
            username=username,
            password=password
        )
        return {
            'user': {
                'username': user.username,
                'email': user.email,
                'types': user.types
            },
            'token': user.token,
        }

    def login(context):
        username = context['username']
        password = context['password']
        if username is None:
            raise serializers.ValidationError(
                'An username is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError(
                'User with this username and password was not found or the password is incorrect.'
            )

        if not user.check_password(password):
            raise serializers.ValidationError(
                'User with this username and password was not found or the password is incorrect.'
            )

        return {
            'user': {
                'username': user.username,
                'email': user.email,
                'types': user.types
            },
            'token': user.token
        }