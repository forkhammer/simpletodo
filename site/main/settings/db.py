class DatabaseMixin:
    # Database
    # https://docs.djangoproject.com/en/1.11/ref/settings/#databases

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'HOST': 'mysql',
            'NAME': 'todo',
            'USER': 'root',
            'PASSWORD': '1'
        }
    }