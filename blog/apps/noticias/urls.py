from django.urls import path

from . import views

# LA URL EMPIEZA CON Noticias/ <este archivo>
	
app_name = 'noticias'
	
urlpatterns = [
    
    path('', views.ultimasNoti, name = 'ultima'),
    # path('', views.Mostrar.as_view(), name = 'noticias'),
    
	
]