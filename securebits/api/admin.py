from django.contrib import admin
from .models import VaultItem, Folder, VaultUser


# Register your models here.
admin.site.register(VaultUser)
admin.site.register(VaultItem)
admin.site.register(Folder)
