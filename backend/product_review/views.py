from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from product_review.models import ProductReview
from product_review.permissions import ReadOnly, IsAuthor
from product_review.serializer import RestaurantsReviewsSerializer, CreateRestaurantsReviewsSerializer

User = get_user_model()


class ListCreateRestaurantsReviewsView(ListCreateAPIView):
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = ProductReview.objects.all()


    def perform_create(self, serializer):
        serializer.save(reviewer=self.request.user)


class CreateRestaurantsReviewsView(CreateAPIView):
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = ProductReview.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def perform_create(self, serializer):
        serializer.save(product_id=self.kwargs['restaurant_id'])


class ListReviewsRestaurantsView(ListAPIView):
    serializer_class = RestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self, **kwargs):
        queryset = ProductReview.objects.filter(product_id=self.kwargs['restaurant_id'])
        return queryset


