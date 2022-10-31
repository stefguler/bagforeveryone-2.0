from django.contrib.auth import get_user_model
from rest_framework import serializers

from comments_on_review.models import Comments

User = get_user_model()


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = "__all__"


class CreateCommentsSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='username')
    review = serializers.SlugRelatedField(read_only=True, slug_field='id')
    class Meta:
        model = Comments
        fields = "__all__"
