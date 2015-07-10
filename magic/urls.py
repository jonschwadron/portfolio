from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.magicpage),
    url(r'^index.html', views.index, name="index"),
    url(r'^messages.html', views.messages, name="messages"),
    url(r'^tasks.html', views.tasks, name="tasks"),
    url(r'^ui.html', views.ui, name="ui"),
    url(r'^widgets.html', views.widgets, name="widgets"),
    url(r'^submenu.html', views.submenu, name="submenu"),
    url(r'^submenu2.html', views.submenu2, name="submenu2"),
    url(r'^submenu3.html', views.submenu3, name="submenu3"),
    url(r'^form.html', views.form, name="form"),
    url(r'^chart.html', views.chart, name="chart"),
    url(r'^typography.html', views.typography, name="typography"),
    url(r'^gallery.html', views.gallery, name="gallery"),
    url(r'^table.html', views.table, name="table"),
    url(r'^calendar.html', views.calendar, name="calendar"),
    url(r'^file-manager.html', views.filemanager, name="filemanager"),
    url(r'^icon.html', views.icon, name="icon"),
    url(r'^login.html', views.login, name="login"),
    url(r'^help.html', views.help, name="help"),
]
