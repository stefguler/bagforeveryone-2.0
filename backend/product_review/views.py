from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.response import Response

from restaurants_review.models import RestaurantsReviews
from restaurants_review.permissions import ReadOnly, IsAuthor
from restaurants_review.serializer import RestaurantsReviewsSerializer, CreateRestaurantsReviewsSerializer

User = get_user_model()


class ListCreateRestaurantsReviewsView(ListCreateAPIView):
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = RestaurantsReviews.objects.all()


    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CreateRestaurantsReviewsView(CreateAPIView):
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = RestaurantsReviews.objects.all()
    lookup_url_kwarg = 'restaurant_id'

    def perform_create(self, serializer):
        serializer.save(restaurants_id=self.kwargs['restaurant_id'], author=self.request.user)


class ListReviewsRestaurantsView(ListAPIView):
    serializer_class = RestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'restaurant_id'

    def get_queryset(self, **kwargs):
        queryset = RestaurantsReviews.objects.filter(restaurants_id=self.kwargs['restaurant_id'])
        return queryset

class ListReviewsUserView(ListAPIView):
    serializer_class = RestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = RestaurantsReviews.objects.filter(author_id=self.kwargs['user_id'])
        return queryset


class RetrieveUpdateDeleteRestaurantsReviewsView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateRestaurantsReviewsSerializer
    queryset = RestaurantsReviews.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'review_id'


class ToggleLikedReview(GenericAPIView):

    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = RestaurantsReviews.objects.all()
    lookup_url_kwarg = 'review_id'

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_liked_post = user in post.liked_by.all()
        if user_liked_post:
            post.liked_by.remove(user)
        else:
            post.liked_by.add(user)
        return Response(self.get_serializer(post).data)


class LikedReviewsView(GenericAPIView):
    queryset = RestaurantsReviews.objects.all()
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [ReadOnly]

    def get(self, request, *args, **kwargs):
        user = self.request.user.id
        queryset = self.get_queryset()
        queryset = queryset.filter(liked_by=user)
        serializer = CreateRestaurantsReviewsSerializer(queryset, many=True)
        return Response(serializer.data)

class ReviewsUserCommentsView(GenericAPIView):
    queryset = RestaurantsReviews.objects.all()
    serializer_class = CreateRestaurantsReviewsSerializer
    permission_classes = [ReadOnly]

    def get(self, request, *args, **kwargs):
        user = self.request.user.id
        queryset = self.get_queryset()
        queryset = queryset.filter(comments__author=user)
        serializer = CreateRestaurantsReviewsSerializer(queryset, many=True)
        return Response(serializer.data)

