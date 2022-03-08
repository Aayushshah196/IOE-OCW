from calendar import c
from django.db.models import Q
from rest_framework import generics,permissions, views, status
from rest_framework.response import Response
from .models import Courses, Lesson,Comment,UserAccount
from .serializers import GetCourseSerializer,CreateCourseSerializer, \
                    CompleteCourseSerializer,UpdateCourseSerializer, \
                    CreateLessonSerializer,CompleteLessonSerializer, \
                    UpdateLessonSerializer,CommentSerializer, \
                    BasicUserSerializer, CourseDetailSerializer, \
                    EnrollmentSerializer, \
                    MyTokenObtainPairSerializer
from .permissions import CourseModify,LessonModify
from rest_framework_simplejwt.views import TokenObtainPairView

from django.shortcuts import get_object_or_404

class GetUserInfo(generics.ListAPIView):
    permissions_classes=(permissions.IsAuthenticated,)
    queryset=UserAccount.objects.all()
    serializer_class=BasicUserSerializer

class GetCourse(generics.ListAPIView):
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = Courses.objects.all()
    serializer_class = GetCourseSerializer


class CourseDetail(generics.ListAPIView):
    # permission_classes = (permissions.IsAuthenticated,)
    def get_queryset(self):
        return Courses.objects.filter(id=self.kwargs.get("id"))
    # queryset = Courses.objects.get(id=id)
    serializer_class = CourseDetailSerializer


class CreateCourse(generics.CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,CourseModify,)
    queryset=Courses.objects.none()
    serializer_class = CreateCourseSerializer


class CompleteCourseDetail(generics.ListAPIView):
    # permission_classes = (permissions.IsAuthenticated,)
    queryset = Courses.objects.all()
    serializer_class = CompleteCourseSerializer


# class SearchData(views.APIView):
#     def get(self, request, search_text):
#         courses = Courses.objects.filter(subject__contains=search_text | Q(title__contains=search_text)  | Q(description__contains=search_text)  | Q(summary__contains=search_text))
#         if courses:
#             courses = GetCourseSerializer(courses, many=True).data
#             return Response({"courses":courses}, status=status.HTTP_200_OK)
#         return Response({"message": "Not found"}, status=status.HTTP_404_NOT_FOUND)



class CourseData(views.APIView):
    def get(self, request):
        featured = Courses.objects.all()
        trending = Courses.objects.all()
        recently = Courses.objects.all()
        upcoming = Courses.objects.all()

        featured = GetCourseSerializer(featured, many=True).data
        trending = GetCourseSerializer(trending, many=True).data
        recently = GetCourseSerializer(recently, many=True).data
        upcoming = GetCourseSerializer(upcoming, many=True).data

        return Response({'featured':featured, 'trending':trending, 
                    'recently':recently, 'upcoming':upcoming}, status=status.HTTP_200_OK)

    def post(self, request):
        # post view for creating a course
        course = request.data
        serializer = CreateCourseSerializer(data=course)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class EnrollCourse(views.APIView):
    def post(self, request):
        # post view for creating a course
        print("backend course enroll")
        data = request.data
        serializer = EnrollmentSerializer(data={'user':data['userId'], 'course':data['courseId']})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 

class UpdateCourse(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,CourseModify,)
    queryset =Courses.objects.all()
    serializer_class = UpdateCourseSerializer

class CreateLesson(generics.CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,LessonModify,)
    serializer_class = CreateLessonSerializer

class UpdateLesson(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,LessonModify,)
    queryset = Lesson.objects.all()
    serializer_class = UpdateLessonSerializer

class CompleteLessonDetail(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Lesson.objects.all()
    serializer_class = CompleteLessonSerializer

class CommentHandle(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer