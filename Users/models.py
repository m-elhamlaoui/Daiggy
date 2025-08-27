from django.db import models
from admin_dashboard.models import Products
from django.contrib.auth.models import User
from django.utils import timezone


class Admin(models.Model):
    nom      = models.CharField(max_length=100)
    email    = models.EmailField()
    password = models.CharField(max_length=100)
    isAdmin  = models.CharField(max_length=5 , default="true")
    
    def __str__(self):
        return self.nom
    
class Users(models.Model):
    nom      = models.CharField(max_length=100)
    email    = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    isAdmin  = models.BooleanField(default=False)
    
    def __str__(self):
        return self.nom
    
class ShopingCart(models.Model):
    image1   = models.CharField(max_length=100)
    image2   = models.CharField(max_length=100)
    image3   = models.CharField(max_length=100)
    image4   = models.CharField(max_length=100)
    size     = models.CharField(max_length=30)
    quantity = models.PositiveIntegerField(default=1)
    price    = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    email    = models.EmailField()
    password = models.CharField(max_length=100)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.email} - {self.size} - {self.quantity}"

    def save(self, *args, **kwargs):
        # Automatically calculate subtotal
        self.subtotal = self.price * self.quantity
        super().save(*args, **kwargs)



class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    ]
    image1   = models.CharField(max_length=100)
    image2   = models.CharField(max_length=100)
    image3   = models.CharField(max_length=100)
    image4   = models.CharField(max_length=100)
    size     = models.CharField(max_length=30)
    quantity = models.PositiveIntegerField(default=1)
    price    = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    email    = models.EmailField()
    password = models.CharField(max_length=100)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    delivery_requested = models.BooleanField(default=False)
    payment_proof = models.ImageField(upload_to='payments/%y/%m/%d')
    phone_number1 = models.CharField(max_length=20)
    phone_number2 = models.CharField(max_length=20)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    rejection_reason = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.email} - {self.size} - {self.quantity}"

    def save(self, *args, **kwargs):
        # Automatically calculate subtotal
        self.subtotal = self.price * self.quantity
        super().save(*args, **kwargs)

class Notification(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"To {self.user.username} - {'Read' if self.is_read else 'Unread'}"
    

class FavoriteProduct(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    email = models.EmailField()
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.nom} - {self.product.id}"