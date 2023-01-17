from rest_framework import serializers
from .models import Station
from .models import Bike

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
        fields = ['id','status']
