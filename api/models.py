from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class VaultUser(AbstractUser):
    email = models.EmailField(unique=True, blank=False)

    def __str__(self):
        return self.username


class Folder(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(to=VaultUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Vault(models.Model):
    name = models.CharField(max_length=128, blank=False)
    username = models.CharField(max_length=128, blank=False)
    password = models.CharField(max_length=128, blank=False)
    folder = models.ForeignKey(to=Folder, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(to=VaultUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
