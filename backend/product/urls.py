"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path

from product.views import ListCreateRestaurantsView, ListFilterRestaurantView, RetrieveUpdateDeleteRestaurantsView, \
    ListFilterRestaurantByCategoryView, ListCategoryView

urlpatterns = [

    path('product/', ListCreateRestaurantsView.as_view()),
    path('product/new/', ListCreateRestaurantsView.as_view()),
    path('product/user/<int:user_id>/', ListUserRestaurantsView.as_view()),
    path('product/category/<str:category>/', ListFilterRestaurantByCategoryView.as_view()),
    path('product/filter/', ListFilterRestaurantView.as_view()),
    path('product/<int:id>/', RetrieveUpdateDeleteRestaurantsView.as_view()),
    path('category/list/', ListCategoryView.as_view()),


]
