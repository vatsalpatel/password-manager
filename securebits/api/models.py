from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class VaultUser(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
    reminder = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.username


class Folder(models.Model):
    name = models.CharField(max_length=128, unique=True)
    user = models.ForeignKey(to=VaultUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Vault(models.Model):
    name = models.CharField(max_length=128)
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=128)
    folder = models.ForeignKey(to=Folder, null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(to=VaultUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
