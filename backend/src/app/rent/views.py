from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import RentSerializer
from rest_framework.permissions import (IsAuthenticated)


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
