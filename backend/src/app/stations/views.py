from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Station
from .serializers import StationSerializer
from .models import Bike
from .serializers import BikeSerializer

class StationView(viewsets.GenericViewSet):
    def get(self, request, slug=None):
        if slug:
            station = get_object_or_404(Station.objects.all(), slug=slug)
            serializer_one = StationSerializer(station)
            return Response({'data': serializer_one.data})
        stations = Station.objects.all()
        serializer = StationSerializer(stations, many=True)
        return Response(serializer.data)

    def post(self, request):
        station = request.data.get('station')
        serializer = StationSerializer(data=station)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        station = get_object_or_404(Station.objects.all(), slug=slug)
        station.delete()
        return Response({'data': 'Station deleted'})

    def put(self, request, slug):
        station = get_object_or_404(Station.objects.all(), slug=slug)
        data = request.data.get('station')
        serializer = StationSerializer(
            instance=station, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)


class BikeView(viewsets.GenericViewSet):

    def get(self, request, slug=None):
        print("dentro del get")
        if slug:
            show_bikes = get_object_or_404(Bike.objects.all(), slug=slug)
            serializer = BikeSerializer(show_bikes)
            return Response(serializer.data)
        bikes = Bike.objects.all()
        serializer = BikeSerializer(bikes, many=True)
        return Response(serializer.data)

    def post(self, request):
        new_bike = request.data.get('bike')
        serializer = BikeSerializer(data=new_bike)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)

    def put(self, request, slug):
        saved_bike = get_object_or_404(Bike.objects.all(), slug=slug)
        data = request.data.get('bike')
        serializer = BikeSerializer(instance=saved_bike, data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        search_bike = get_object_or_404(Bike.objects.all(), slug=slug)
        search_bike.delete()
        return Response("Deleted")
