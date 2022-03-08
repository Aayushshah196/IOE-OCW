from rest_framework import permissions

#used for course permissions
class CourseModify(permissions.BasePermission):
        def has_permission(self, request, view):
            return (request.user.role==2)
        
        def has_object_permission(self, request,view, obj):
            return request.user==obj.instructor


class LessonModify(permissions.BasePermission):
    def has_permission(self, request, view):
        return (request.user.role == 2)

    def has_object_permission(self, request, view, obj):
        print(obj.instructor)
        print(obj.course.instructor)
        return request.user == obj.instructor and request.user==obj.course.instructor
