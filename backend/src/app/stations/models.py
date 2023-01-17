from django.db import models


class Bike(models.Model):
    # slug = models.SlugField(max_length=100, unique=True, editable=False)
    status = models.CharField(max_length=200)

    def __unicode__(self):
        return self.id
