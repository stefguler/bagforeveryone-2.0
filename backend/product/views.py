from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from restaurants.models import Restaurants
from restaurants.permissions import ReadOnly, IsAuthor
from restaurants.serializer import RestaurantsSerializer, CreateRestaurantsSerializer, CategorySerializer

User = get_user_model()


class BestRestaurantsView(ListAPIView):
    serializer_class = RestaurantsSerializer
    permission_classes = [ReadOnly]
    queryset = Restaurants.objects.all().order_by('-rating_average')[0:4]


class ListUserRestaurantsView(GenericAPIView):

    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = [ReadOnly]
    lookup_url_kwarg = 'user_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = queryset.filter(author=self.kwargs['user_id'])
        serializer = RestaurantsSerializer(queryset, many=True)
        return Response(serializer.data)


class ListCreateRestaurantsView(ListCreateAPIView):
    serializer_class = CreateRestaurantsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Restaurants.objects.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ListFilterRestaurantByCategoryView(GenericAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = [ReadOnly]
    lookup_url_kwarg = 'category'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = queryset.filter(category=self.kwargs['category'])
        serializer = RestaurantsSerializer(queryset, many=True)
        return Response(serializer.data)


class ListFilterRestaurantView(ListAPIView):
    serializer_class = RestaurantsSerializer
    permission_classes = [ReadOnly]
    queryset = Restaurants.objects.all()

    def get_queryset(self):
        params = self.request.query_params.get("search")
        queryset = Restaurants.objects.filter(Q(name__icontains=params))

        return queryset


class RetrieveUpdateDeleteRestaurantsView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateRestaurantsSerializer
    queryset = Restaurants.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'id'


class ListCategoryView(ListAPIView):
    serializer_class = CategorySerializer
    permission_classes = [ReadOnly]
    queryset = Restaurants.objects.all()


