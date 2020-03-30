from django.db import models

# Create your models here.
class Property(models.Model):
    property_name = models.CharField(max_length=1000, blank=True)


Status_Choices = (
        ('ON', 'ON'),
        ('OFF', 'OFF'),
    )
class GarbagePoint(models.Model):
    Location = models.CharField(max_length=1000, blank=True)
    Latitude = models.IntegerField(default=0,blank=True)
    Longitude = models.IntegerField(default=0, blank=True)
    UID = models.CharField(max_length=1000, blank=True)
    RegisteredBy = models.CharField(max_length=1000, blank=True)
    FilledPercent = models.IntegerField(default=0, blank=True)
    StatusChoices = models.CharField(max_length=25, choices=Status_Choices, blank=True)
