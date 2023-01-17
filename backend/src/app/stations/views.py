from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Bike
from .serializers import BikeSerializer


class BikeView(APIView):

    def get(self, request, pk=None):
        print("dentro del get")
        if pk:
            show_bikes = get_object_or_404(Bike.objects.all(), pk=pk)
            serializer = BikeSerializer(show_bikes)
            return Response({"Bike": serializer.data})
        bikes = Bike.objects.all()
        serializer = BikeSerializer(bikes, many=True)
        return Response(serializer.data)

    def post(self, request):
        new_bike = request.data.get('bike')
        serializer = BikeSerializer(data=new_bike)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)
