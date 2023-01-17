from django.db import models

class Station(models.Model):

    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    status = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True, db_index=True)

    def __str__(self):
        return str(self.id)
        
        
class Bike(models.Model):
    # slug = models.SlugField(max_length=100, unique=True, editable=False)
    status = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)
