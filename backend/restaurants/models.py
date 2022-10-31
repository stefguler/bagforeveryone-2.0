from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Restaurants(models.Model):
    FINE_DINING = "FI"
    CASUAL_DINING = "CA"
    FAST_FOOD = "FA"
    FAMILY_STYLE = "FM"
    FOOD_TRUCK = "FO"
    CAFE = "CA"
    PUB = "PU"
    BUFFET = "BU"
    DINER = "DI"
    BARBECUE = "BA"
    TAKE_AWAY = "TA"

    CATEGORY_CHOICES = [
        (FINE_DINING, "Fine Dining"),
        (CASUAL_DINING, "Casual Dining"),
        (FAST_FOOD, "Fast Food"),
        (FAMILY_STYLE, "Family Style"),
        (FOOD_TRUCK, "Food Truck"),
        (CAFE, "Cafe"),
        (PUB, "Pub"),
        (BUFFET, "Buffet"),
        (DINER, "Diner"),
        (BARBECUE, "Barbecue"),
        (TAKE_AWAY, "Take Away"),
    ]
    CHEAP = "C"
    AVERAGE = "A"
    EXPENSIVE = "E"

    PRICE_LEVEL_CHOICES = [
        (CHEAP, "$"),
        (AVERAGE, "$$"),
        (EXPENSIVE, "$$$"),
    ]
    def restaurants_image_directory_path(instance, filename):
        return f'restaurants/{instance.id}/{filename}'

    name = models.CharField(max_length=250, unique=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    country = models.CharField(max_length=250)
    street = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    zip = models.CharField(max_length=100, blank=True)
    website = models.URLField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    email = models.EmailField(blank=True)
    opening_hours = models.CharField(max_length=200)
    price_level = models.CharField(max_length=10, choices=PRICE_LEVEL_CHOICES)
    image = models.ImageField(blank=True, upload_to=restaurants_image_directory_path)
    author = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='restaurants')
    date_created = models.DateTimeField(auto_now_add=True)
    rating_average = models.FloatField(default=0)
    review_count = models.IntegerField(default=0)

    def update_review_fields(self):
        reviews = self.restaurant_reviews.all()
        self.rating_average = reviews.aggregate(models.Avg('rating')).get('rating__avg')
        self.save(update_fields=['rating_average'])






