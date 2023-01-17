from django.db import models


class Station(models.Model):

    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True, null=False)
    status = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True, db_index=True)

    def __unicode__(self):
        return self.id