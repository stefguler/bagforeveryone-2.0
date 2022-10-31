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

from restaurants.views import ListCreateRestaurantsView, ListFilterRestaurantView, RetrieveUpdateDeleteRestaurantsView, \
    ListFilterRestaurantByCategoryView, ListUserRestaurantsView, ListCategoryView, BestRestaurantsView

urlpatterns = [

    path('restaurants/', ListCreateRestaurantsView.as_view()),
    path('restaurants/new/', ListCreateRestaurantsView.as_view()),
    path('restaurants/user/<int:user_id>/', ListUserRestaurantsView.as_view()),
    path('restaurants/category/<str:category>/', ListFilterRestaurantByCategoryView.as_view()),
    path('restaurants/filter/', ListFilterRestaurantView.as_view()),
    path('restaurants/<int:id>/', RetrieveUpdateDeleteRestaurantsView.as_view()),
    path('category/list/', ListCategoryView.as_view()),
    path('home/', BestRestaurantsView.as_view()),

]
