from django.shortcuts import render
from django.views import View
import requests

class ProductListView(View):
    template_name = 'product_list.html'

    def get(self, request):
        api_url = 'http://localhost:8001/api/v1/products'
        response = requests.get(api_url)
        products = response.json()

        return render(request, self.template_name, {'products': products})
    

class UserListView(View):
    template_name = 'user_list.html'

    def get(self, request):
        api_url = 'http://localhost:8001/api/v1/users'
        response = requests.get(api_url)
        users = response.json()

        return render(request, self.template_name, {'users': users})    
