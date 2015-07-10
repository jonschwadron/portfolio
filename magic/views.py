from django.shortcuts import render

def magicpage(request):
    return render(request, 'index.html')

def index(request):
    return render(request, 'index.html')

def messages(request):
    return render(request, 'messages.html')

def tasks(request):
    return render(request, 'tasks.html')

def ui(request):
    return render(request, 'ui.html')

def widgets(request):
    return render(request, 'widgets.html')

def submenu(request):
    return render(request, 'submenu.html')

def submenu2(request):
    return render(request, 'submenu2.html')

def submenu3(request):
    return render(request, 'submenu3.html')

def form(request):
    return render(request, 'form.html')

def chart(request):
    return render(request, 'chart.html')

def typography(request):
    return render(request, 'typography.html')

def gallery(request):
    return render(request, 'gallery.html')

def table(request):
    return render(request, 'table.html')

def calendar(request):
    return render(request, 'calendar.html')

def filemanager(request):
    return render(request, 'file-manager.html')

def icon(request):
    return render(request, 'icon.html')

def login(request):
    return render(request, 'login.html')
