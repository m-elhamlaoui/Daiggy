app_name = 'users'
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.ChekUser, name='connexion'),
    path('signup/', views.SignUp, name='signup'),
    path('Add_Product/<int:product_id>/', views.Add_To_Cart, name='add_to_cart'),
    path('cart/', views.Cart, name = 'cart'),
    path('update/<int:product_id>', views.ToPageUpdate, name = 'page_update_product'),
    path('updateproduct/<int:product_id>', views.UpdateCart, name = 'update_product'),
    path('deleteeproduct/<int:product_id>', views.Delete_Product, name='delete_product'),
    path('add-to-favorite/', views.add_to_favorite, name='add_to_favorite'),
]