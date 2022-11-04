from django.contrib.auth import get_user_model
from django.db import models
from product.models import Product

User = get_user_model()

class Post(models.Model):

    OPEN = "OP"
    CLOSED = "CL"
    PAID = "PA"
    SHIPPED = "SH"

    STATUS_CHOICES = [
        (OPEN, "open"),
        (CLOSED, "closed"),
        (PAID, "paid"),
        (SHIPPED, "shipped"),
    ]

    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    content = models.TextField(max_length=500, blank=True)
    buyer = models.ForeignKey(User, related_name='order', on_delete=models.PROTECT, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    products = models.ManyToManyField(to=Product, related_name='order', blank=True, default=None)

    def __str__(self):
        return f'ID {self.pk}: {self.title}'


