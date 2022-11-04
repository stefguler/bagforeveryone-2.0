from django.contrib.auth import get_user_model
from rest_framework import serializers

from comment.serializer import CommentsSerializer, CreateCommentsSerializer
from product_review.models import ProductReview
from users.serializers import UserSerializer

User = get_user_model()

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = ['rating']

class RestaurantsReviewsSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    comments = CommentsSerializer(many=True)

    class Meta:
        model = ProductReview
        fields = "__all__"




class CreateRestaurantsReviewsSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    product = serializers.SlugRelatedField(read_only=True, slug_field='name')
    comments = CommentsSerializer(many=True, read_only=True)


    class Meta:
        model = ProductReview
        fields = "__all__"

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['comments'] = CommentsSerializer()
    #     return representation

