# Generated by Django 4.1.1 on 2022-11-08 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_order_city_order_country_order_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='city',
            field=models.TextField(blank=True, default=None, max_length=30),
        ),
    ]