# Generated by Django 3.2.8 on 2022-09-29 18:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('libreria', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='libro',
            old_name='description',
            new_name='descripcion',
        ),
    ]
