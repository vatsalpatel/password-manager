from django.contrib import admin
from .models import Vault, Folder, VaultUser


# Register your models here.
admin.site.register(VaultUser)
admin.site.register(Vault)
admin.site.register(Folder)
