from django.shortcuts import render

def magicpage(request):
    return render(request, 'index.html')
