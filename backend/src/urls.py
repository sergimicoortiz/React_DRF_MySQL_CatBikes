from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('src.app.stations.urls')),
    path('api/', include('src.app.user.urls')),
]
