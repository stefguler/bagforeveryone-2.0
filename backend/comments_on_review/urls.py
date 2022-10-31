"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path


from comments_on_review.views import ListCommentsView, ListCommentsUserView, CreateCommentsView, \
    RetrieveUpdateDeleteCommentView

urlpatterns = [

    path('review/comment/list/', ListCommentsView.as_view()),
    path('review/comment/<int:user_id>/', ListCommentsUserView.as_view()),
    path('review/comment/new/<int:review_id>/', CreateCommentsView.as_view()),
    path('review/comment/id/<int:comment_id>/', RetrieveUpdateDeleteCommentView.as_view()),



]
