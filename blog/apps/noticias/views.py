from datetime import timezone
from django.shortcuts import render,redirect
from django.views.generic import CreateView, DetailView, ListView
from django.contrib.auth.decorators import login_required
# Create your views here.
from .models import Noticia, Categoria, Comentario
from django.urls import reverse_lazy

from apps.usuarios.models import Usuario


def ultimasNoti(request):
    noticiaUlt = Noticia.objects.order_by('id').reverse()[:3]
    noticia = Noticia.objects.all()
    categoria = Categoria.objects.all()
    context ={'noticiaUlt':noticiaUlt,
              'noticia':noticia,
              'categoria':categoria}
    return render(request,'noticia/noticias.html',context)


def detalle_noticia(request, pk):
    n = Noticia.objects.get(pk = pk)
    c = Comentario.objects.all().filter(noticia = n.pk)
    context= {'noticia':n,
              'comentario':c}
    return render(request,'noticia/detalle.html',context)

def filtro_categoria(request,pk):
    n = Noticia.objects.filter( categoría_noticia = pk)
    noticiaUlt = Noticia.objects.order_by('id').reverse()[:3]
    noticia = Noticia.objects.all()
    categoria = Categoria.objects.all()
    context= {'filtro':n,
              'noticiaUlt':noticiaUlt,
              'noticia':noticia,
              'categoria':categoria}
    return render(request,'noticia/categoria.html',context)


@login_required
def comentario_add(request):
    com = request.POST.get('comentario',None)
    usu = request.user
    noti = request.POST.get('id_noticia', None)# OBTENGO LA PK
    noticia = Noticia.objects.get(pk = noti) #BUSCO LA NOTICIA CON ESA PK
    coment = Comentario.objects.create(usuario = usu, noticia = noticia, texto = com)

    return redirect(reverse_lazy('noticias/detalle.html', kwargs={'pk':noti}))
    

