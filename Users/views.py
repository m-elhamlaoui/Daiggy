from django.shortcuts import get_object_or_404, render, redirect
from .models import Admin
from .models import Users
from .models import ShopingCart
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from django.db.models import Sum
from django.db.models import Q
from django.http import JsonResponse
from .models import FavoriteProduct, Users
from admin_dashboard.models import Products


def SignUp(request):
    if request.method == 'POST' :
        pass
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        passwordHasher = make_password(password1)
        is_admin = request.POST.get('isAdmin', 'False')

        if Users.objects.filter(email=email).exists() or Users.objects.filter(password=passwordHasher).exists():
            context = {
                'message' : 'Essayez avec un autre email'
            }
            return render(request, 'registration/login.html', context)

        if password1 == password2:
            # Crée le nouvel utilisateur
            user = Users.objects.create(nom=username, email=email, password=password1, isAdmin = is_admin)
            user.save()
            request.session['user_email'] = email
            request.session['user_id'] = user.id
            return redirect('index')
        else :
            context = 'Erreur'
            return render(request, 'registration/login.html', context)




    return HttpResponse('welcome to signup function')



def ChekUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')


        if username == 'med' and password == '1234':
            return redirect('Admin')
        else:
            user = Users.objects.filter(Q(email=username) | Q(nom=username),password=password).first()
            if user :
                request.session['user_email'] = user.email
                request.session['user_name'] = user.nom

                # Get items
                cartitems = ShopingCart.objects.filter(email = user.email , password=user.password)
                # Count items
                item_count= cartitems.count()

                request.session['item_count'] = item_count
                return redirect('index')

            context = {
                'messagel' : 'Nom ou mot de passe invalide'
            }
            return render (request, 'registration/login.html', context)


def Cart(request) :
        email = request.session.get('user_email')
        user = Users.objects.get(email=email)
        password = user.password


        # Get items
        cartitems = ShopingCart.objects.filter(email = email , password=password)

        # Count items
        item_count= cartitems.count()

        #subtotal for all sub total
        total_subtotal = cartitems.aggregate(total=Sum('subtotal'))['total'] or 0

        context = {
            'cartitems'     : cartitems,
            'item_count'    : item_count,
            'total_subtotal': total_subtotal
        }

        return render(request, 'products/cart.html', context)



def Add_To_Cart(request, product_id):
    if request.method == 'POST':
        image1 = request.POST.get('image1')
        image2 = request.POST.get('image2')
        image3 = request.POST.get('image3')
        image4 = request.POST.get('image4')
        size = request.POST.get('size')
        quantity = int(request.POST.get('quantity'))
        price = float(request.POST.get('price'))
        email = request.POST.get('email')
        user = Users.objects.get(email = email)
        password = user.password

        subtotal = price * quantity

        ShopingCart.objects.create(
            image1=image1,
            image2=image2,
            image3=image3,
            image4=image4,
            size=size,
            quantity=quantity,
            price=price,
            subtotal=subtotal,
            email=email,
            password=password,
            user_id=user.id
        )

        # Get items
        cartitems = ShopingCart.objects.filter(email=email, password=password)

        # Count items
        item_count= cartitems.count()

        #subtotal for all sub total
        total_subtotal = cartitems.aggregate(total=Sum('subtotal'))['total'] or 0

        context = {
            'cartitems'     : cartitems,
            'item_count'    : item_count,
            'total_subtotal': total_subtotal
        }

        return render(request, 'products/cart.html', context)




def ToPageUpdate(request, product_id) :
    user_email = request.session.get('user_email')
    try:
        product = ShopingCart.objects.get(id=product_id)
    except ShopingCart.DoesNotExist:
        return HttpResponse("Product not found", status=404)

    context = {
        'product':product,
        'user_email':user_email
    }
    return render(request, 'products/updatecart.html', context)




def UpdateCart(request, product_id):
    if request.method == 'POST':
        email = request.POST.get('email')
        user = Users.objects.get(email = email)
        password = user.password
        product = get_object_or_404(ShopingCart, id=product_id, email=email, password=password)

        image1 = request.POST.get('image1')
        image2 = request.POST.get('image2')
        image3 = request.POST.get('image3')
        image4 = request.POST.get('image4')
        size = request.POST.get('size')
        quantity = int(request.POST.get('quantity'))
        price = float(request.POST.get('price'))

        subtotal = price * quantity

        #Update only this product
        product.image1 = image1
        product.image2 = image2
        product.image3 = image3
        product.image4 = image4
        product.size = size
        product.quantity = quantity
        product.price = price
        product.subtotal = subtotal
        product.save()

        # 🛒Load updated cart
        cartitems = ShopingCart.objects.filter(email=email, password=password)
        item_count = cartitems.count()
        total_subtotal = cartitems.aggregate(total=Sum('subtotal'))['total'] or 0

        context = {
            'cartitems': cartitems,
            'item_count': item_count,
            'total_subtotal': total_subtotal
        }

        return render(request, 'products/cart.html', context)




def Delete_Product(request, product_id):
    email = request.session.get('user_email')
    user = Users.objects.get(email = email)
    password = user.password


    product = get_object_or_404(ShopingCart, id=product_id, email=email, password=password)
    product.delete()

    # 🛒Load updated cart
    cartitems = ShopingCart.objects.filter(password=password)
    item_count = cartitems.count()
    total_subtotal = cartitems.aggregate(total=Sum('subtotal'))['total'] or 0

    context = {
        'cartitems': cartitems,
        'item_count': item_count,
        'total_subtotal': total_subtotal
    }

    return render(request, 'products/cart.html', context)


def add_to_favorite(request):
    if request.method == 'POST' and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        user_email = request.session.get('user_email')
        if not user_email:
            return JsonResponse({'success': False, 'msg': 'not_logged_in'})

        user = Users.objects.get(email=user_email)
        product_id = request.POST.get('product_id')
        if not product_id or not product_id.isdigit():
            return JsonResponse({'success': False, 'msg': 'invalid_product'})

        product = Products.objects.get(id=product_id)
        fav, created = FavoriteProduct.objects.get_or_create(user=user, product=product)

        if created:
            # تم الإضافة
            return JsonResponse({'success': True, 'action': 'added'})
        else:
            # حذف من المفضلة
            fav.delete()
            return JsonResponse({'success': True, 'action': 'removed'})