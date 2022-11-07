from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from product.models import Product
from product.permissions import ReadOnly, IsAuthor
from product.serializer import RestaurantsSerializer, CreateRestaurantsSerializer, CategorySerializer

User = get_user_model()


class ListCreateRestaurantsView(ListCreateAPIView):
    serializer_class = CreateRestaurantsSerializer
    queryset = Product.objects.all()


class ListFilterRestaurantByCategoryView(GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = RestaurantsSerializer
    lookup_url_kwarg = 'category'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = queryset.filter(category=self.kwargs['category'])
        serializer = RestaurantsSerializer(queryset, many=True)
        return Response(serializer.data)


class ListFilterRestaurantView(ListAPIView):
    serializer_class = RestaurantsSerializer
    permission_classes = [ReadOnly]
    queryset = Product.objects.all()

    def get_queryset(self):
        params = self.request.query_params.get("search")
        queryset = Product.objects.filter(Q(name__icontains=params))

        return queryset


class RetrieveUpdateDeleteRestaurantsView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateRestaurantsSerializer
    queryset = Product.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'id'


class ListCategoryView(ListAPIView):
    serializer_class = CategorySerializer
    permission_classes = [ReadOnly]
    queryset = Product.objects.all()


