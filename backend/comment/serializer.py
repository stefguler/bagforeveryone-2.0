from django.contrib.auth import get_user_model
from rest_framework import serializers

from comment.models import Comment

User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class CreateCommentSerializer(serializers.ModelSerializer):
    commenter = serializers.SlugRelatedField(read_only=True, slug_field='id')
    post = serializers.SlugRelatedField(read_only=True, slug_field='id')
    class Meta:
        model = Comment
        fields = "__all__"
