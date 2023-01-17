
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Station
from .serializers import StationSerializer

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
