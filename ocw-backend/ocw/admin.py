from django.contrib import admin
from .models import  UserAccount,Courses,Lesson,Comment,Enrollment
# Register your models here.

admin.site.register(UserAccount)
admin.site.register(Courses)
admin.site.register(Lesson)
admin.site.register(Comment)
admin.site.register(Enrollment)