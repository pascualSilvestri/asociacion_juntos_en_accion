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
    categoria = Categoria.objects.all().order_by('nombre')
    # Modifcicar para agrear antiguo y nuevo
    antiguo = Categoria.objects.all().order_by('id')
    nuevas = Categoria.objects.all().order_by('-id')
        
    context ={'noticiaUlt':noticiaUlt,
              'noticia':noticia,
              'categoria':categoria,
              'antiguo':antiguo,
              'nuevas':nuevas}
    return render(request,'noticia/noticias.html',context)


def detalle_noticia(request, pk):
    n = Noticia.objects.get(pk = pk)
    c = Comentario.objects.all().filter(noticia = n.pk).order_by('-id')
    context= {'noticia':n,
              'comentario':c}
    return render(request,'noticia/detalle.html',context)

def filtro_categoria(request,pk):
    n = Noticia.objects.filter( categoría_noticia = pk)
    print(n.__len__)
    ban = False
    cont = 0
    for i in n:
        cont +=1
    if cont == 0:
        ban = False
    else:
        ban = True
    noticiaUlt = Noticia.objects.order_by('id').reverse()[:3]
    noticia = Noticia.objects.all()
    categoria = Categoria.objects.all()
    context= {'filtro':n,
              'noticiaUlt':noticiaUlt,
              'noticia':noticia,
              'categoria':categoria,
              'ban':ban}
    return render(request,'noticia/categoria.html',context)


@login_required
def Comentario_add(request):
    com = request.POST.get('comentario',None)
    usu = request.user
    noti = request.POST.get('id_noticia', None)# OBTENGO LA PK
    noticia = Noticia.objects.get(pk = noti) #BUSCO LA NOTICIA CON ESA PK
    coment = Comentario.objects.create(usuario = usu, noticia = noticia, comentario = com)

    return redirect(reverse_lazy('noticias:detalle', kwargs={'pk':noti}))
    

