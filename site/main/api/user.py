from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from main.form.auth import AuthForm, RegistrationForm
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth import authenticate
from django.contrib.auth.views import login, logout
from rest_framework.authentication import BasicAuthentication
from . import CsrfExemptSessionAuthentication

from django.contrib.auth.models import User
from main.serializers.user import UserSerializer


class UserView(ModelViewSet):
    serializer_class = User
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return User.objects.all()


class UserAnonymousView(ViewSet):

    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

    def active(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return Response({
                'user': UserSerializer(request.user).data
            })
        else:
            return Response({
                'user': None
            })

    def login(self, request, *args, **kwargs):
        context = {}
        form = AuthForm(request=self.request, data=self.request.data)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user is not None:
                if user.is_active:
                    auth_login(self.request, user)
                    context['result'] = True
                    context['message'] = 'Добро пожаловать'
                    context['user'] = UserSerializer(user).data
                else:
                    context['result'] = False
                    context['message'] = 'Аккаунт заблокирован'
            else:
                # Return an 'invalid login' error message.
                context['result'] = False
                context['message'] = 'Неправильные имя пользователя или пароль'
        else:
            context['result'] = False
            context['message'] = 'Ошибка авторизации'
            messages = []
            for field in form.errors:
                messages.append(form.errors[field][0])
            context['errors'] = messages
        return Response(context)

    def logout(self, request, *args, **kwargs):
        auth_logout(request)
        return Response({
            'user': None
        })

    def register(self, request, *args, **kwargs):
        context = {}
        form = RegistrationForm(data=self.request.data)
        if form.is_valid():
            form.save(request=self.request)
            context['user'] = UserSerializer(form.user).data
            context['result'] = True
            context['message'] = 'Успешно зарегистрировались'
        else:
            context['result'] = False
            context['message'] = 'Ошибка регистрации'
            messages = []
            for field in form.errors:
                messages.append(form.errors[field][0])
            context['errors'] = messages
        return Response(data=context)


