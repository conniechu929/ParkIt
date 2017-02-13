from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.welcome),
    url(r'^index$', views.index)
]
