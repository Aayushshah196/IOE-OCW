from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Courses,Lesson,Comment, Enrollment

User = get_user_model()

class BasicUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'first_name', 'last_name', 'image')

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'isInstructor', 'first_name', 'last_name', 'email', 'password', 'image', 'dob')

class GetCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ('id', 'title', 'description', 'summary', 'duration', 'instructor', 'thumbnail')
        

class CreateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Courses

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Enrollment

class CourseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'instructor', 'title', 'description', 'summary', 'duration', 'thumbnail', 'pace', 'subject', 'start_date', 'difficulty', 'cost', 'entry_date')
        model = Courses


class UpdateCourseSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('title', 'description', 'duration', 'thumbnail')
        model = Courses

class AbstractLessonSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','title','date_uploaded')
        model = Lesson

class CompleteCourseSerializer(serializers.ModelSerializer):
    lessons = AbstractLessonSerializer(many=True)
    class Meta:
        fields = ('id', 'instructor', 'title', 'description', 'duration', 'thumbnail','lessons','user')
        model = Courses

class CreateLessonSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'instructor', 'title', 'description', 'video','date_uploaded','material','course')
        model = Lesson

class UpdateLessonSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('title', 'description', 'video', 'date_uploaded','material')
        model = Lesson

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields=('user','lesson','description')
        model=Comment

class CompleteLessonSerializer(serializers.ModelSerializer):
    comments=CommentSerializer(many=True)
    class Meta:
        fields = ('id', 'instructor', 'title', 'description', 'video','date_uploaded','material','course','comments')
        model = Lesson

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Add extra responses here
        data['email'] = self.user.email
        data['id'] = self.user.id
        data['name'] = self.user.first_name
        # data['groups'] = self.user.groups.values_list('name', flat=True)
        return data