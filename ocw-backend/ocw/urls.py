from django.urls import path
from .views import GetCourse,CreateCourse, \
    UpdateCourse, CompleteCourseDetail,CreateLesson, \
    UpdateLesson,CommentHandle,CompleteLessonDetail, \
    GetUserInfo, CourseData, CourseDetail, \
    EnrollCourse, \
    MyTokenObtainPairView#, SearchData

urlpatterns = [
    path('course/', CourseData.as_view()),
    path('course/<uuid:id>/', CourseDetail.as_view()),
    path('course/get/', GetCourse.as_view()),
    path('course/create', CreateCourse.as_view()),
    path('course/detail/<str:pk>/', CompleteCourseDetail.as_view()),
    path('course/update/<str:pk>', UpdateCourse.as_view()),

    path('enroll/', EnrollCourse.as_view()),
    # path('SearchData/<str:search_text', search.as_view()),

    path('lesson/create', CreateLesson.as_view()),
    path('lesson/detail/<str:pk>', CompleteLessonDetail.as_view()),
    path('lesson/update/<str:pk>',UpdateLesson.as_view()),

    path('lesson/comment/<str:pk>',CommentHandle.as_view()),
    path('user/<str:pk>',GetUserInfo.as_view()),
    path('auth/jwt/create/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]