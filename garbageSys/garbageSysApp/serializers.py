from rest_framework import serializers
from .models import Property,GarbagePoint
class PropertySerializer(serializers.ModelSerializer):
    # author = serializers.StringRelatedField()
    class Meta:
        model = Property
        # exclude = ("id")
        fields = "__all__"
        # fields = ("title","description","body")
class GarbagePointSerializer(serializers.ModelSerializer):
    class Meta:
        model = GarbagePoint
        fields = "__all__"