from datetime import timezone
from django.shortcuts import render
from django.views.generic import CreateView, DetailView, ListView
from django.contrib.auth.decorators import login_required
# Create your views here.
from .models import Noticia
from .models import Categoria

@login_required
def ultimasNoti(request):
    noticiaUlt = Noticia.objects.order_by('id').reverse()[:3]
    noticia = Noticia.objects.all()
    categoria = Categoria.objects.all()
    context ={'noticiaUlt':noticiaUlt,
              'noticia':noticia,
              'categoria':categoria}
    return render(request,'noticia/noticias.html',context)


@login_required
def detalle_noticia(request, pk):
    n = Noticia.objects.get(pk = pk)

    context= {'noticia':n}
    return render(request,'noticia/detalle.html',context)

# class Mostrar(ListView):
#     model = Noticia
#     template_name = 'noticias.html'
    
#     def get_contador(self,**kwargs):
#         context = super().get_context_data(**kwargs)
#         context['now'] = timezone.now()
#         return context