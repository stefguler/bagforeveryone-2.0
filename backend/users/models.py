from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):

    def users_image_directory_path(instance, filename):
        return f'users/{instance.id}/{filename}'
    # REQUIRED_FIELDS = ["username"]
    # asking for email in authentication. (Instead of username)
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['password']

    # For gender choice
    MALE = "M"
    FEMALE = "F"
    OTHER = "X"

    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other"),
    ]

    email = models.EmailField(unique=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    first_name = models.TextField(max_length=50)
    last_name = models.TextField(max_length=50)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    street = models.TextField(max_length=50)
    street_number = models.IntegerField()
    zip = models.IntegerField()
    city = models.TextField(max_length=50)
    country = models.TextField(max_length=50)
    profile_picture = models.ImageField(blank=True, upload_to=users_image_directory_path)
    password = models.CharField(max_length=100)
    code = models.CharField(max_length=100, blank=True)

