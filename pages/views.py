from django.shortcuts import redirect, render
from admin_dashboard.models import Products
from admin_dashboard.models import Category
from django.http import HttpResponse
from django.utils import timezone
from django.http import JsonResponse
from Users.models import FavoriteProduct, Users



# Create your views here.
def index(request):
    user_email = request.session.get('user_email', None)

    categories_with_products = []

    for category in Category.objects.all():
        cat_products = Products.objects.filter(category=category)

        for prod in cat_products:
            if prod.sold > 0:
                prod.sale_end_iso = prod.sale_end.isoformat()

        if cat_products.exists():
            categories_with_products.append((category, cat_products))


    # attach an ISO string for JS to parse
    on_sale = Products.objects.filter(sold__gt=0)
    for p in on_sale:
        p.sale_end_iso = p.sale_end.isoformat()
    
    favorite_ids = []
    if request.session.get('user_email'):
        user = Users.objects.get(email=request.session['user_email'])
        favorite_ids = list(FavoriteProduct.objects.filter(user=user).values_list('product_id', flat=True))

    context = {
        'categorys': Category.objects.all(),
        'categories_with_products': categories_with_products,
        'solds':  on_sale[:10], 
        'user_email': user_email,
        'is_authenticated': bool(request.session.get('user_email')),
        'favorite_ids': favorite_ids,
    }
    return render(request, 'pages/index.html', context)


def WelcomeToLogin(request):
    return render(request, 'registration/login.html')

                  


def about(request) :

    return render(request,'pages/about.html')

