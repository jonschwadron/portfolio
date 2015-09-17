from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.homepage),
    url(r'^about/$', views.about),
    url(r'^hearts/$', views.hearts),


    url(r'^personal/nyc-calc/$', views.nyc_calc, name="nyc-calc"),
    url(r'^personal/suggestion-box/$', views.suggestion_box, name="sugestion-box"),

    url(r'^cultureiq-web/$', views.ciqw_index, name="ciqw-index"),
    url(r'^cultureiq-web/home/$', views.ciqw_index, name="ciqw-index"),
    url(r'^cultureiq-web/about/$', views.ciqw_about, name="ciqw-about"),

    url(r'^cultureiq-app/$', views.ciqa_index, name="ciqa-index"),
    url(r'^cultureiq-app/index/$', views.ciqa_index, name="ciqa_index"),
    url(r'^cultureiq-app/surveys/$', views.ciqa_surveys, name="ciqa_surveys"),
    url(r'^cultureiq-app/analytics/$', views.ciqa_analytics, name="ciqa_analytics"),
    url(r'^cultureiq-app/pulse/$', views.ciqa_pulse, name="ciqa_pulse"),

]
