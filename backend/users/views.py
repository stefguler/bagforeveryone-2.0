from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from rest_framework.response import Response

from product.models import Product
from product.serializer import RestaurantsSerializer
from product_review.models import ProductReview
from product_review.serializer import RestaurantsReviewsSerializer
from users.permissions import ReadOnly
from users.serializers import UserSerializer, MyUserSerializer

User = get_user_model()


class ListUserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class RetrieveUserView(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [ReadOnly]
    lookup_url_kwarg = 'user_id'


class GetUserProfile(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = MyUserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user.id
        instance = self.get_queryset()
        instance = instance.filter(id=user)
        serializer = MyUserSerializer(instance, many=True)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = MyUserSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.request.user
        instance.delete()
        return Response(status=204)


class SearchUserView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [ReadOnly]


    def get_queryset(self):
        params = self.request.query_params.get("search")
        paramstype = self.request.query_params.get("type")
        if paramstype == "product":
            queryset = Product.objects.filter(name__icontains=params)
            return queryset

        elif paramstype == "reviews":
            queryset = ProductReview.objects.filter(text_content__icontains=params)
            return queryset

        elif paramstype == "users":
            queryset = User.objects.filter(
                Q(username__icontains=params) | Q(first_name__icontains=params) | Q(last_name__icontains=params))
            return queryset
        else:
            return

    def get_serializer_class(self):
        paramstype = self.request.query_params.get("type")
        if paramstype == "product":
            serializer = RestaurantsSerializer
            return serializer

        elif paramstype == "reviews":
            serializer = RestaurantsReviewsSerializer
            return serializer

        else:
            serializer = UserSerializer
            return serializer


