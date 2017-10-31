#-*- coding: utf-8 -*-
from django.contrib.auth.forms import AuthenticationForm
from django import forms
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.validators import validate_email


class AuthForm(AuthenticationForm):
    """
    Форма авторизации
    """
    def __init__(self, *args, **kwargs):
        super(AuthForm, self).__init__(*args, **kwargs)


class RegistrationForm(forms.Form):
    username = forms.CharField(label='Email', widget=forms.EmailInput(attrs={'placeholder': 'Email'}), required=True, error_messages={
        'required': 'Введите Email',
        'invalid': 'Неправильный формат Email',
        'unique_email': 'Пользователь с таким Email уже зарегистрирован',
    })
    first_name = forms.CharField(label='Имя', required=False)
    last_name = forms.CharField(label='Фамилия', required=False)
    password = forms.CharField(label='Пароль', required=True, error_messages={
        'required': 'Введите пароль'
    })
    

    def clean_username(self):
        username = self.data.get('username')
        validate_email(username)
        exist_user = User.objects.filter(email=username)
        if exist_user:
            raise forms.ValidationError(self.fields['username'].error_messages['unique_email'], code='unique_email')
        return username

    def save(self, request=None):
        username = self.cleaned_data['username']
        first_name = self.cleaned_data.get('first_name', '')
        last_name = self.cleaned_data.get('last_name', '')
        password = self.cleaned_data.get('password', '')

        if not first_name:
            username_split = username.split('@')
            first_name = username_split[0]

        self.user = User.objects.create_user(username=username,
                                        email=username,
                                        password=password,
                                        first_name = first_name,
                                        last_name = last_name,
                                        is_active=True,
                                        )
        self.user.backend = 'django.contrib.auth.backends.ModelBackend'