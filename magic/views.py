from django.shortcuts import render

def homepage(request):
    return render(request, 'personal/index.html')

def ciqw_index(request):
    return render(request, 'cultureiq-web/index.html')

def ciqa_index(request):
    return render(request, 'cultureiq-app/index.html')

def ciqa_surveys(request):
    return render(request, 'cultureiq-app/surveys.html')

def ciqa_analytics(request):
    return render(request, 'cultureiq-app/analytics.html')

def ciqa_pulse(request):
    return render(request, 'cultureiq-app/pulse.html')
