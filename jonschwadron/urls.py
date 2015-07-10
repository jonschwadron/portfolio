from django.conf.urls import include, url

urlpatterns = [
    #url(r'^custom/', include('customApp.urls')),
    url(r'', include('magic.urls')),
]
