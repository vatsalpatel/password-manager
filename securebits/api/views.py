from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import VaultItemSerializer, FolderSerializer
from .models import VaultItem, Folder


# Create your views here.
class VaultItemViewSet(viewsets.ModelViewSet):
    serializer_class = VaultItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return VaultItem.objects.filter(user=self.request.user)


class FolderViewSet(viewsets.ModelViewSet):
    serializer_class = FolderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Folder.objects.get(user=self.request.user)
