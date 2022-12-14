from django.urls import path


from users.views import ListUserView, RetrieveUserView, GetPatchDeleteUser

urlpatterns = [
    path('list/', ListUserView.as_view()),
    path('retreive/<int:user_id>/', RetrieveUserView.as_view()),
    path('me/', GetPatchDeleteUser.as_view()),
]
