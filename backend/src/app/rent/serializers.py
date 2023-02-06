from rest_framework import serializers
from .models import Rent
from src.app.user.models import User
from src.app.stations.models import Bike, Slot


class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = ['user_id', 'bike_id', 'start_slot_id',
                  'end_slot_id', 'start_date', 'end_date']

    def to_rent(instance):
        return ({
            "id": instance.id,
            "user": instance.user_id,
            "bike": instance.bike_id,
            "start_slot": instance.start_slot_id,
            "end_slot": instance.end_slot_id,
            "start_date": instance.start_date,
            "end_date": instance.end_date,
        })

    def rent(context):
        username = context['username']
        slot_id = context['slot_id']

        user = User.objects.get(username=username)
        if user is None:
            raise serializers.ValidationError(
                'User is not find'
            )

        slot = Slot.objects.get(pk=slot_id)
        if slot is None:
            raise serializers.ValidationError(
                'Slot is not find'
            )

        bike = Bike.objects.get(pk=slot.bike_id)
        if bike is None:
            raise serializers.ValidationError(
                'Bike is not find'
            )

        # CREATE RENT

        rent = Rent.objects.create(
            user_id=user.id,
            bike_id=slot.bike_id,
            start_slot_id=slot_id
        )
        rent.save()

        # SLOT UPDATE

        slot.bike_id = None
        slot.status = 'unused'
        slot.save()

        # BIKE UPDATE

        bike.status = 'used'
        bike.save()

        return rent
