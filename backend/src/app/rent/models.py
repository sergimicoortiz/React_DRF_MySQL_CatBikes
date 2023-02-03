from django.db import models

class Rent(models.Model):

    def __str__(self):
        return str(self.id)