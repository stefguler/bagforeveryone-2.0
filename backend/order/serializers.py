# from django.contrib.auth import get_user_model
from rest_framework import serializers

from order.models import Order
from users.serializers import UserSerializer

# User = get_user_model()


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     representation['owner'] = RepresentationUserSerializer(instance.owner, many=False).data
    #     return representation


class NewOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        exclude = ["status", "content"]


class ChangeOrderStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ["status"]