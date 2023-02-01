from rest_framework import serializers
from .models import Blacklist


class blacklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blacklist
        fields = ('token')

    def newBlackToken(context):

        token = context['token']

        token_create = Blacklist.objects.create(
            token=token,
        )
        return {
            'token': token_create.token,
        }
