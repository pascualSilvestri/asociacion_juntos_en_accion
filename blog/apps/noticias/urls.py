from django.urls import path

from . import views

# LA URL EMPIEZA CON Noticias/ <este archivo>
	
app_name = 'noticias'
	
urlpatterns = [
    
    path('', views.ultimasNoti, name = 'ultima'),
    # path('', views.Mostrar.as_view(), name = 'noticias'),
    path('Detalles/<int:pk>', views.detalle_noticia, name = 'detalle'),
    path('Categoria/<int:pk>', views.filtro_categoria, name = 'filtro'),
    path('Acendente/', views.filtro_asce, name = 'asce'),
    path('', views.filtro_desc, name = 'desc'),
	
 
    path('Comentario/',views.Comentario_add, name= 'comentar'),

]