from django.urls import path
from .views import ProductListView
from .views import UserListView

urlpatterns = [
    path('product-list/', ProductListView.as_view(), name='product_list'),
    path('user-list/', UserListView.as_view(), name='user_list'),
]
