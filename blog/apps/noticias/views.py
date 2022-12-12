from datetime import timezone
from django.shortcuts import render
from django.views.generic import CreateView, DetailView, ListView
# Create your views here.
from .models import Noticia



def ultimasNoti(request):
    noticiaUlt = Noticia.objects.order_by('id').reverse()[:3]
    noticia = Noticia.objects.all()
    context ={'noticiaUlt':noticiaUlt,
              'noticia':noticia}
    return render(request,'noticias.html',context)



# class Mostrar(ListView):
#     model = Noticia
#     template_name = 'noticias.html'
    
#     def get_contador(self,**kwargs):
#         context = super().get_context_data(**kwargs)
#         context['now'] = timezone.now()
#         return context