from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseRedirect

from rest_framework import generics, mixins, status
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
import requests
import json

from .models import Property,GarbagePoint
from .serializers import PropertySerializer ,GarbagePointSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view,authentication_classes,permission_classes


# Create your views here.
def index(request):
    return render(request,'index.html')


@csrf_exempt  
@api_view(['GET', 'POST'])
# @login_required
def Hardware(request):
    """
    List all code snippets, or create a new snippet.
    """
    print(request.content_type)
    if request.method == 'GET':
        Filtered_GP = GarbagePoint.objects.filter(UID = str(request.content_type))
        for i in Filtered_GP:
            status = i.StatusChoices
        return Response({"data":status})

    elif request.method == 'POST':
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data["id"])
            return Response({"id":serializer.data["id"]}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def GarbagePointView(request):
    if request.method == 'GET':
        AllGarbagePoint = GarbagePoint.objects.all()
        serializer = GarbagePointSerializer(AllGarbagePoint, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GarbagePointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data["id"])
            return Response({"id":serializer.data["id"]}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def AlterStatusView(request):
    """
    List all code snippets, or create a new snippet.
    """
    # print(request.content_type)
    if request.method == 'POST':
        Selected_GP = GarbagePoint.objects.get(UID = "saurav")
        if Selected_GP.StatusChoices == "ON":
            Selected_GP.StatusChoices="OFF"
            Selected_GP.save()
        else: 
            Selected_GP.StatusChoices="ON"
            Selected_GP.save()
        return Response({"data":Selected_GP.StatusChoices})
    return Response({"data":"Selected_GP.StatusChoices"})

    # elif request.method == 'POST':
    #     serializer = PropertySerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         print(serializer.data["id"])
    #         return Response({"id":serializer.data["id"]}, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)