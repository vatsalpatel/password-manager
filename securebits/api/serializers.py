from rest_framework import serializers
from .models import Vault, Folder


class VaultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vault
        fields = ["id", "name", "username", "password", "folder", "user"]


class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ["id", "name", "user"]
