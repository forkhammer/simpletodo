from main.models import Todo
from rest_framework import serializers


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = (
            'id',
            'date',
            'time',
            'desc',
            'user',
        )
        extra_kwargs = {
            "date": {
                "error_messages": {
                    "required": "Введите дату",
                    'invalid': 'Неверный формат даты'
                }
            },
            "time": {
                "error_messages": {
                    "required": "Введите время",
                    'invalid': 'Неверный формат времени'
                }
            },
            "desc": {
                "error_messages": {
                    "required": "Введите описание",
                }
            }
        }