from django.db import models
from django.conf import settings


class Comentario(models.Model):
    
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    slug = models.SlugField()
    comentario = models.TextField(max_length=200, blank=True,null=True)
    fecha = models.DateTimeField(auto_now_add = True)
    
    def __unicode__(self):
        return self.slug



class Categoria(models.Model):
    
    nombre = models.CharField(max_length = 60)
    
    def __str__(self):
        return self.nombre

class Noticia(models.Model):
    
    titulo = models.CharField(max_length = 150)
    cuerpo = models.TextField()
    imagen = models.ImageField(upload_to = 'noticias')
    categoría_noticia = models.ForeignKey(Categoria, on_delete = models.CASCADE)
    fecha = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.titulo
