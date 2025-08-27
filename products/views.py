from django.shortcuts import render, get_object_or_404
from .models import Product
from admin_dashboard.models import Category
from admin_dashboard.models import Products
from Users.models import Users
from Users.models import FavoriteProduct
import ast
from django.http import HttpResponse
from django.db.models import Q

# Create your views here.

def products(request) :
    category_name = request.GET.get('category', '')

    # Get the category object to filter products
    category = None
    products = Products.objects.all()

    if category_name:
        categoryWeWant = Category.objects.get(nameFr=category_name)
        products = Products.objects.filter(category=categoryWeWant.id)

    favorite_ids = []
    if request.session.get('user_email'):
        user = Users.objects.get(email=request.session['user_email'])
        favorite_ids = list(FavoriteProduct.objects.filter(user=user).values_list('product_id', flat=True))

    context = {
        'category': category_name,
        'products': products,
        'favorite_ids': favorite_ids,
        'is_authenticated': bool(request.session.get('user_email')),
        'categorys': Category.objects.all(),
    }
    return render(request, 'products/products.html', context)



def product(request) :
    product_id = request.GET.get('id','')
    user_email = request.session.get('user_email')
    if id:
        product = get_object_or_404(Products, id=product_id)
    else:
        product = None

    images = []
    if product.image1 :
        images.append(product.image1)

    if product.image2 :
        images.append(product.image2)

    if product.image3 :
        images.append(product.image3)

    if product.image4 :
        images.append(product.image4)

    context = {
        'product': product,
        'sizes' : ast.literal_eval(product.size),
        'user_email' : user_email,
        'images' : images,
        'is_authenticated': bool(request.session.get('user_email')),
    }

    return render(request,'products/product.html', context)
