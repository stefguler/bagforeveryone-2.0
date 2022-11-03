from django.contrib.auth import get_user_model
from django.db.models import Avg
from rest_framework import serializers
from restaurants.models import Restaurants
from restaurants_review.models import RestaurantsReviews
from restaurants_review.serializer import RestaurantsReviewsSerializer

User = get_user_model()


class RestaurantsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurants
        fields = '__all__'




class CreateRestaurantsSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='username')
    class Meta:
        model = Restaurants
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurants
        fields = ['category']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = ["Fine Dining", "Casual Dining", "Fast Food", "Family Style", "Food Truck",
                                      "Cafe", "Pub", "Buffet", "Diner", "Barbecue", "Take Away"]
        return representation
