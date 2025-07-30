from django.shortcuts import render, redirect
# from .models import Admin
# from .models import Users
from .models import Products
from .models import Category
from django.http import HttpResponse

def Admin(request):
    # if request.method == 'POST':
    #     username = request.POST.get('username')
    #     password = request.POST.get('password')

        # if username == 'med' and password == '1234':
     return render(request,'admin_dashboard/admin.html')
        # else:
            # return HttpResponse('no cest pas bon')


def PageAddCategory(request):
    return render(request,'admin_dashboard/Add_category.html')

def PageAddProduct(request):
    categorys = Category.objects.all()
    context = {
        'categorys': categorys,
    }
    return render(request,'admin_dashboard/Add_product.html', context)

def PageUpdateCategory(request):
     return render(request,'admin_dashboard/Update_category.html')

def PageUpdateProduct(request):
     return render(request,'admin_dashboard/Update_product.html')


# events
def AddProduct(request):
    if request.method == 'POST':
            image1 = request.FILES.get('image1')
            image2 = request.FILES.get('image2')
            image3 = request.FILES.get('image3')
            image4 = request.FILES.get('image4')
            # category = request.POST.get('categoryselected')
            quantity = request.POST.get('quantity')
            sizes = [s for s in request.POST.getlist('sizes[]') if s.strip()]
            sold = request.POST.get('sold', 'False')
            price = float(request.POST.get('price'))
            category_id = request.POST.get('categoryselected')  # ID du category
            category = Category.objects.get(id=category_id)

            Products.objects.create(
                image1=image1,
                image2=image2,
                image3=image3,
                image4=image4,
                category=category,
                size=sizes,
                sold=sold,
                quantity=quantity,
                price=price,
            )
            categorys = Category.objects.all()
            context = {
                'categorys': categorys,
            }

    return render(request,'admin_dashboard/Add_product.html', context)


def AddCategory(request):
    if request.method == 'POST':
            image = request.FILES.get('image')
            namefr = request.POST.get('namefr')
            namear = request.POST.get('namear')


            Category.objects.create(
                image =image,
                nameFr =namefr,
                nameAr=namear,
            )
    return render(request,'admin_dashboard/Add_category.html')