from django.contrib import admin
from django.forms import ModelChoiceField
# Register your models here.
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price']
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Product, CategoryAdmin)