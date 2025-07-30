from django.db import models
from admin_dashboard.models import Category
# Create your models here.

class Product(models.Model) :
    image = models.ImageField(upload_to='photos/%y/%m/%d', blank=True, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.category} - {self.price}"