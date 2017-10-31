class CorsMixin:
    # CORS_ORIGIN_ALLOW_ALL = True
    CORS_ORIGIN_WHITELIST = (
        'localhost:4200',
    )
    CORS_ALLOW_CREDENTIALS = True