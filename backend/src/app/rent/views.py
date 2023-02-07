from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import RentSerializer
from rest_framework.permissions import (IsAuthenticated)
from rest_framework.permissions import (
    AllowAny)
from src.app.core.permissions import IsAdmin


class RentAuthenticatedView(viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]

    def rent(self, request):
        data = request.data['rentBike']
        username = request.user
        serializer_context = {
            'username': username,
            'slot_id': data['start_slot']
        }

        serializer = RentSerializer.rent(context=serializer_context)

        return Response(RentSerializer.to_rent(serializer))

    def returnBike(self, request):
        data = request.data['returnBike']
        username = request.user
        serializer_context = {
            'username': username,
            'slot_id': data['end_slot'],
            'bike_id': data['bike_id']
        }

        serializer = RentSerializer.returnBike(context=serializer_context)

        return Response(RentSerializer.to_rent(serializer))

#     def rentUser(self, request):
        


# class RentViewAdmin(viewsets.GenericViewSet):
#     permission_classes = [IsAdmin]
