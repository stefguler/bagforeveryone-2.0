from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Product(models.Model):
    SHOPPER = "SH"
    POUCH = "PO"
    BACKPACK = "BA"
    BELLYBAG = "BE"
    DONATION = "DO"

    CATEGORY_CHOICES = [
        (SHOPPER, "shopper"),
        (POUCH, "pouch"),
        (BACKPACK, "backpack"),
        (BELLYBAG, "bellybag"),
        (DONATION, "donation"),
    ]
    def product_image_directory_path(instance, filename):
        return f'product/{instance.id}/{filename}'

    name = models.CharField(max_length=250, unique=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    description = models.CharField(max_length=250)
    material = models.CharField(max_length=250)
    dimensions = models.CharField(max_length=250)
    stock = models.IntegerField(max_length=10)
    price = models.IntegerField(max_length=10)
    image = models.ImageField(blank=True, upload_to=product_image_directory_path)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)