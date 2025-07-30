from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.Admin, name='Admin'),
    path('AddCategory/', views.PageAddCategory, name='PageAddCategory'),
    path('AddProduct/', views.PageAddProduct, name='PageAddProduct'),
    path('UpdateCategory/', views.PageUpdateCategory, name='UpdateCategory'),
    path('UpdateProduct/', views.PageUpdateProduct, name='UpdateProduct'),

    path('Add/', views.AddProduct, name='AddProduct'),
    path('Addc/', views.AddCategory, name='AddCategory'),

]