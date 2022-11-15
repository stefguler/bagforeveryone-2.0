# Generated by Django 4.1.1 on 2022-11-15 08:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('OP', 'open'), ('CL', 'closed'), ('PA', 'paid'), ('SH', 'shipped')], default='OP', max_length=10)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('email', models.EmailField(blank=True, max_length=30)),
                ('first_name', models.TextField(blank=True, max_length=30)),
                ('last_name', models.TextField(blank=True, max_length=30)),
                ('street', models.TextField(blank=True, max_length=30)),
                ('street_number', models.IntegerField(null=True)),
                ('zip', models.IntegerField(null=True)),
                ('city', models.TextField(blank=True, max_length=30)),
                ('country', models.TextField(blank=True, max_length=30)),
                ('phone', models.TextField(blank=True, max_length=30)),
                ('shipping_note', models.TextField(blank=True, max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ProductType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(through='order.ProductType', to='product.product'),
        ),
    ]
