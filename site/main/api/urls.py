from django.conf.urls import url

from .todo import TodoView
from .user import UserView, UserAnonymousView


urlpatterns = [
    url(r'^user/active$', UserAnonymousView.as_view({'get': 'active'})),
    url(r'^user/login$', UserAnonymousView.as_view({'post': 'login'})),
    url(r'^user/logout$', UserAnonymousView.as_view({'post': 'logout'})),
    url(r'^user/register$', UserAnonymousView.as_view({'post': 'register'})),

    url(r'^todo$', TodoView.as_view({'get': 'list', 'post': 'create'})),
    url(r'^todo/(?P<pk>\d+)$', TodoView.as_view({'get': 'retrieve', 'post': 'update', 'delete': 'destroy'})),
]