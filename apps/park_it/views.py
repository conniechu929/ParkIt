from django.shortcuts import render, redirect
from django.contrib.gis.geos import GEOSGeometry

# Create your views here.
def welcome(request):
	return render(request,'park_it/welcome.html')

def index(request):
	return render(request, 'park_it/index.html')
