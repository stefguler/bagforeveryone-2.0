from django.contrib.auth import get_user_model
from django.db import models

from restaurants_review.models import RestaurantsReviews

User = get_user_model()


class Comments(models.Model):
    text_content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.PROTECT, related_name='comments_on_reviews')
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments', blank=True)
    review = models.ForeignKey(to=RestaurantsReviews, on_delete=models.CASCADE, related_name="comments")
