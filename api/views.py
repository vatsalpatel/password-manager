from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import VaultSerializer, FolderSerializer
from .models import Vault, Folder


# Create your views here.
class VaultViewSet(viewsets.ModelViewSet):
    serializer_class = VaultSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Vault.objects.filter(user=self.request.user)

    def perform_create(self, serializer_class):
        serializer_class.save(user=self.request.user)


class FolderViewSet(viewsets.ModelViewSet):
    serializer_class = FolderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Folder.objects.filter(user=self.request.user)

    def perform_create(self, serializer_class):
        serializer_class.save(user=self.request.user)
