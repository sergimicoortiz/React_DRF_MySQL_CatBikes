from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User, UserManager


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email', 'username', 'types')

    # def to_user(instance):
    #     return {
    #         'uuid': instance.uuid,

    #     }

    # def getUser(context):
    #     user = context['user']
    #     if user is None:
    #         raise serializers.ValidationError(
    #             'User is not find'
    #         )
    #     user = User.objects.get(email=user)

    #     if not user.is_active:
    #         raise serializers.ValidationError(
    #             'This user has been deactivated.'
    #         )
    #     return {
    #         'user': {
    #             'username': user.username,
    #             'email': user.email,
    #             'types':user.types
    #         },
    #         'token': user.token,
    #     }

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
        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = User.objects.get(email=email)

        if user is None:
            raise serializers.ValidationError(
                'User with this email and password was not found.'

            )

        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'user': {
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.fullname,
                'n_incidents': user.n_incidents,
                'n_coupons': user.n_coupons,
                'is_active': user.is_active,
                'role':user.role,
                'types':user.types
            },
            'token': user.token
        }
