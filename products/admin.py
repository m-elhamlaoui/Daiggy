from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('category', 'price', 'active')  # Show category name
    list_filter = ('category', 'active')
    search_fields = ('category__name', 'price')

admin.site.register(Product, ProductAdmin)