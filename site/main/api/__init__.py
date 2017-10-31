from rest_framework.authentication import SessionAuthentication

class CsrfExemptSessionAuthentication(SessionAuthentication):
    """
    Отключение csrf в api запросах
    """
    def enforce_csrf(self, request):
        return