from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Bike
from .serializers import BikeSerializer


class BikeView(viewsets.GenericViewSet):

    def get(self, request, pk=None):
        print("dentro del get")
        if pk:
            show_bikes = get_object_or_404(Bike.objects.all(), pk=pk)
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

    def put(self, request, pk):
        saved_bike = get_object_or_404(Bike.objects.all(), pk=pk)
        data = request.data.get('bike')
        serializer = BikeSerializer(instance=saved_bike, data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk):
        search_bike = get_object_or_404(Bike.objects.all(), pk=pk)
        search_bike.delete()
        return Response("Deleted")
