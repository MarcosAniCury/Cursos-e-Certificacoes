from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

# Views
from escola.views import AlunosViewSet, CursosViewSet

router = routers.DefaultRouter()
router.register('alunos', AlunosViewSet, basename='Alunos')
router.register('cursos', CursosViewSet, basename='Cursos')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
