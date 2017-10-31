from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    user = models.ForeignKey(User)
    date = models.DateField('Дата')
    time = models.TimeField('Время')
    desc = models.TextField('Описание', default='')


    def __str__(self):
        return str(self.id)

    class Meta:
        managed = True
        verbose_name = 'Todo task'
        verbose_name_plural = 'Task list'