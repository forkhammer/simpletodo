import os
from configurations import Configuration
from .static import StaticFilesMixin
from .rest import RestMixin
from .middleware import MiddlewareMixin
from .templates import TemplatesMixin
from .db import DatabaseMixin
from .cors import CorsMixin


class Base(StaticFilesMixin, RestMixin, MiddlewareMixin, TemplatesMixin, DatabaseMixin, CorsMixin, Configuration):
    # Quick-start development settings - unsuitable for production
    # See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = '^uuxx^974)^5z!n9jx@*f$av#f2!(ac)@k)_g!#y0faa^n9-2='

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = True

    ALLOWED_HOSTS = []


    # Application definition

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'django.contrib.sites',

        'rest_framework',
        'main',
        'corsheaders',
    ]

    ROOT_URLCONF = 'main.urls'

    WSGI_APPLICATION = 'main.wsgi.application'


    # Password validation
    # https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

    AUTH_PASSWORD_VALIDATORS = [
        {
            'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
        },
        {
            'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
        },
    ]


    # Internationalization
    # https://docs.djangoproject.com/en/1.11/topics/i18n/

    LANGUAGE_CODE = 'ru-RU'

    TIME_ZONE = 'UTC'

    USE_I18N = True

    USE_L10N = True

    USE_TZ = True
