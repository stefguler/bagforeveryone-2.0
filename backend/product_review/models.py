from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from restaurants.models import Restaurants

User = get_user_model()


class RestaurantsReviews(models.Model):
    text_content = models.TextField()
    rating = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='restaurant_reviews')
    liked_by = models.ManyToManyField(to=User, related_name='liked_reviews', blank=True)
    restaurants = models.ForeignKey(to=Restaurants, on_delete=models.CASCADE, related_name='restaurant_reviews', blank=True)

    def save(self, *args, **kwargs):
        super(RestaurantsReviews, self).save(*args, **kwargs)
        self.restaurants.update_review_fields()
