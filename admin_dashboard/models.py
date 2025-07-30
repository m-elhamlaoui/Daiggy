from django.db import models
from datetime import timedelta

class Category(models.Model):
    image   = models.ImageField(upload_to='photos/%y/%m/%d')
    nameFr = models.CharField(max_length=50)
    nameAr = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.nameFr} - {self.nameAr}"
    

class Products(models.Model):
    image1   = models.ImageField(upload_to='photos/%y/%m/%d')
    image2   = models.ImageField(upload_to='photos/%y/%m/%d')
    image3   = models.ImageField(upload_to='photos/%y/%m/%d')
    image4   = models.ImageField(upload_to='photos/%y/%m/%d')
    size     = models.CharField(max_length=30)
    quantity = models.PositiveIntegerField(default=1)
    price    = models.DecimalField(max_digits=10, decimal_places=2)
    sold     = models.PositiveIntegerField(default=0)
    days = models.PositiveIntegerField(default=0) 
    startedAt = models.DateTimeField(auto_now_add=True)  
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    @property
    def sale_end(self):
        # end = start + the number of days the sale runs
        return self.startedAt + timedelta(days=self.days)


    def __str__(self):
        return f"{self.category} - {self.price} - {self.quantity}"
    


