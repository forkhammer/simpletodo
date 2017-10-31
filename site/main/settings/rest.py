class RestMixin:
    # REST
    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.AllowAny'
        ],
        'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
        'PAGE_SIZE': 30,
        'DATE_FORMAT': '%d.%m.%Y',
        'DATE_INPUT_FORMATS': ['%d.%m.%Y'],
        'TIME_FORMAT': '%H:%M',
        'TIME_INPUT_FORMAT': ['H:M'],
    }