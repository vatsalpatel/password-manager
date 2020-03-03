from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save


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


def user_created(sender, **kwargs):
    instance = kwargs['instance']
    created = kwargs['created']  # to prevent folders from being created twice
    if created:
        Folder(name="Business", user=instance).save()
        Folder(name="Email", user=instance).save()
        Folder(name="Tools", user=instance).save()
        Folder(name="Social", user=instance).save()
        Folder(name="Education", user=instance).save()


post_save.connect(user_created, sender=VaultUser)  # call user_created when VaultUser instance is saved
