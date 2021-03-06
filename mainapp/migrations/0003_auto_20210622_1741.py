# Generated by Django 3.1.2 on 2021-06-22 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_auto_20210622_1738'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Продудкт')),
                ('slug', models.SlugField(unique=True)),
                ('image', models.ImageField(upload_to='')),
                ('description', models.TextField(null=True, verbose_name='описание')),
                ('price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='цена')),
                ('color', models.BooleanField()),
            ],
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
