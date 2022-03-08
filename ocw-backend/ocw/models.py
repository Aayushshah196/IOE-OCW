import uuid
from sqlite3 import Date

from django.core.validators import FileExtensionValidator
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from datetime import date, datetime
from django.utils import timezone


difficulty_choices = [("beginner", "Beginner"), 
                        ("intermediate", "Intermediate"), 
                        ("advanced", "Advanced")]


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        if user.isInstructor:
            user.role = user.INSTRUCTOR
        else:
            user.role = user.STUDENT

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.dob = timezone.now()
        user.set_password(password)
        user.is_active = True
        user.is_staff = True
        user.is_admin = True
        user.is_superuser = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    STUDENT = 1
    INSTRUCTOR = 2

    ROLE_CHOICES = (
        (STUDENT, 'Student'),
        (INSTRUCTOR, ('Instructor'))
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_instructor = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    isInstructor = models.BooleanField(default=False)
    image = models.ImageField(null=True)
    dob = models.DateField(null=False)
    date_joined = models.DateField(auto_now_add=True)

    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, default=0)
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return self.first_name + " " + self.last_name

    def __str__(self):
        return self.first_name+" "+self.last_name


class Courses(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=False)
    summary  = models.CharField(max_length=200, default="Test summary")
    instructor = models.ForeignKey(UserAccount, default=None, on_delete=models.CASCADE)
    duration = models.PositiveSmallIntegerField(default=6)
    thumbnail = models.ImageField(upload_to='thumbnail', null=True)
    pace = models.CharField(max_length=10, default="self")
    subject = models.CharField(max_length=100 , default="Computer science")
    start_date = models.DateField(default=date.today(), blank=False, null=False)
    difficulty = models.CharField(max_length=20, choices=difficulty_choices, default="Beginner")
    cost = models.IntegerField(default=0)
    entry_date = models.DateTimeField(default=datetime.now(), blank=False)

    def __str__(self):
        return self.title


class Lesson(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    course = models.ForeignKey(Courses, default=None, on_delete=models.CASCADE, related_name="lessons")
    instructor = models.ForeignKey(UserAccount, default=None, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, default=None)
    description = models.CharField(max_length=200, default=None)
    video = models.FileField(upload_to='Lessons', null=True, validators=[FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])], default=None)
    date_uploaded = models.DateTimeField(default=timezone.now)
    material = models.FileField(upload_to='Material', null=True,
                                validators=[FileExtensionValidator(allowed_extensions=['pdf', 'png', 'docx', 'txt'])])
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.course.instructor==self.instructor:
            raise("course is note created by lesson instructor")
        else:
            super(Lesson, self).save(*args, **kwargs)

class Comment(models.Model):
    user=models.ForeignKey(UserAccount,default=None,on_delete=models.CASCADE)
    lesson=models.ForeignKey(Lesson,default=None,on_delete=models.CASCADE,related_name="comments")
    description=models.CharField(max_length=200,default=None)

class Enrollment(models.Model):
    user=models.ForeignKey(UserAccount,default=None,on_delete=models.CASCADE)
    course=models.ForeignKey(Courses,default=None,on_delete=models.CASCADE)
    date_joined = models.DateTimeField(default=datetime.now())
    # def save(self, *args, **kwargs):
    #     if not self.user.is_student:
    #         raise("user is not a student")
    #     else:
    #         super(Enrollment, self).save(*args, **kwargs)

    def __str__(self):  
        return self.user.first_name+" "+self.user.last_name+" "+self.course.title
