# from django.contrib.auth import get_user_model
from rest_framework import serializers

from order.models import Order, ProductType
from product.models import Product
from users.serializers import UserSerializer

# User = get_user_model()


# class OrderSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Order
#         fields = "__all__"
#
#     # def to_representation(self, instance):
#     #     representation = super().to_representation(instance)
#     #     representation['owner'] = RepresentationUserSerializer(instance.owner, many=False).data
#     #     return representation
#
class OrderProductSerializer(serializers.ModelSerializer):
    type = serializers.PrimaryKeyRelatedField(read_only=False, required=True, queryset=Product.objects.all())

    class Meta:
        model = ProductType
        fields = ["type"]

class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True, source='producttype_set')

    class Meta:
        model = Order
        fields = ["id", "status", "content", "buyer", "created", "updated", "email", "first_name", "last_name", "street", "street_number", "zip", "city", "country", "phone", "shipping_note", "products"]




class NewOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        exclude = ["status"]


class ChangeOrderStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ["status"]