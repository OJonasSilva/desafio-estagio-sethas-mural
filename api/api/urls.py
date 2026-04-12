from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from corpnews import views
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

router  = DefaultRouter()
router.register(r'noticias', views.NoticiaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('corpnews_api/', include(router.urls)),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
