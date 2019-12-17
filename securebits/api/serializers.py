from rest_framework import serializers
from .models import VaultItem, Folder


class VaultItemSerializer(serializers.ModelSerializer):
    folder_name = serializers.CharField(source="Folder.name")

    class Meta:
        model = VaultItem
        fields = ["id", "name", "username", "password", "folder_name", "folder", "user"]


class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        models = Folder
        fields = "__all__"
