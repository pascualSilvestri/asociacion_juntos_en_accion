from django.shortcuts import render

def Base(request):
    return render(request,'base.html')

def Home(request):
    return render(request,'home.html')

def Noticias(request):
    return render(request, 'noticias.html')
