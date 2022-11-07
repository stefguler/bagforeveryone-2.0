from django.contrib.auth import get_user_model
from django.db.models import Avg
from rest_framework import serializers
from product.models import Product
from product_review.models import ProductReview
from product_review.serializer import RestaurantsReviewsSerializer

User = get_user_model()


class RestaurantsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class CreateRestaurantsSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='username')
    class Meta:
        model = Product
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['category']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = ["Fine Dining", "Casual Dining", "Fast Food", "Family Style", "Food Truck",
                                      "Cafe", "Pub", "Buffet", "Diner", "Barbecue", "Take Away"]
        return representation
