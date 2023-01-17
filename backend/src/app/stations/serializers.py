from rest_framework import serializers
from .models import Station
from .models import Bike
from .models import Slot


class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'slug', 'name', 'status', 'image', 'address']

    def to_Station(instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "status": instance.status,
            "image": instance.image,
            "address": instance.address
        }


class BikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bike
        fields = ['id', 'slug', 'name', 'status']

    def to_Bike(instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "status": instance.status,
        }


class SlotSerializer(serializers.ModelSerializer):

    class Meta:
        model = Slot
        fields = ['id', 'station_id', 'bike_id', 'status']

    def to_Slot(instance):
        return {
            "id": instance.id,
            "station_id": instance.station_id,
            "bike_id": instance.bike_id,
            "status": instance.status,
        }

    def create(self, validate_data):
        station_id = self.context['station_id']
        bike_id = self.context['bike_id']
        station = Station.objects.get(pk=station_id)

        if station is None:
            raise serializers.ValidationError(
                'Station is not find'
            )

        slot = Slot.objects.create(
            station_id=station_id,
            bike_id=bike_id,
            **validate_data
        )
        return slot
