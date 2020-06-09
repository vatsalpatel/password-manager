from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Vault, Folder, VaultUser


# Register your models here.
admin.site.register(VaultUser)
admin.site.register(Vault)
admin.site.register(Folder)

admin.site.unregister(Group)
