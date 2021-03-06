from django.shortcuts import render

def homepage(request):
    return render(request, 'personal/index.html')

def about(request):
    return render(request, 'personal/about.html')

def hearts(request):
    return render(request, 'personal/hearts.html')

def pokemans(request):
    return render(request, 'personal/pokemans.html')    

def nyc_calc(request):
    return render(request, 'personal/nyc-calc.html')

def suggestion_box(request):
    return render(request, 'personal/suggestion-box.html')

def ciqw_index(request):
    return render(request, 'cultureiq-web/index.html')

def ciqw_home(request):
    return render(request, 'cultureiq-web/index.html')

def ciqw_about(request):
    return render(request, 'cultureiq-web/about.html')

def ciqa_index(request):
    return render(request, 'cultureiq-app/index.html')

def ciqa_surveys(request):
    return render(request, 'cultureiq-app/surveys.html')

def ciqa_analytics(request):
    return render(request, 'cultureiq-app/analytics.html')

def ciqa_pulse(request):
    return render(request, 'cultureiq-app/pulse.html')
