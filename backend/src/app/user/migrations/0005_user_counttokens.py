# Generated by Django 4.1.5 on 2023-02-02 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_remove_user_has_module_perms_user_groups_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='countTokens',
            field=models.IntegerField(default=0),
        ),
    ]