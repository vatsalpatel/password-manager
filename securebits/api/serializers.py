from rest_framework import serializers
from djoser.serializers import UserSerializer, UserCreateSerializer
from .models import Vault, Folder, VaultUser


class VaultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vault
        fields = ["id", "name", "username", "password", "folder", "user"]


class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ["id", "name", "user"]


class VaultUserSerializer(UserSerializer):
    class Meta:
        model = VaultUser
        fields = ["id", "username", "email", "reminder", "first_name", "last_name"]


class VaultUserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = VaultUser
        fields = [
            "id",
            "username",
            "password",
            "email",
            "reminder",
            "first_name",
            "last_name",
        ]
