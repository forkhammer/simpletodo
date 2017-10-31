from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import include, url

from main.views import HomeView

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/', include('main.api.urls')),
    url(r'', HomeView.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
