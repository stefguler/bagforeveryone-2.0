from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):

    def users_image_directory_path(instance, filename):
        return f'users/{instance.id}/{filename}'
    # REQUIRED_FIELDS = ["username"]
    # USERNAME_FIELD = 'email'
    username = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=250, blank=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=50, blank=True)
    things_I_love = models.TextField(blank=True)
    description = models.TextField(blank=True)
    joined_date = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(blank=True, upload_to=users_image_directory_path)
    updated_on = models.DateTimeField(auto_now=True)
    password = models.CharField(max_length=100)
    code = models.CharField(max_length=100, blank=True)


    def __str__(self):
        return self.username
