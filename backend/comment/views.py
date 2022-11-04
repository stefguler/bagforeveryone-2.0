from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from comment.models import Comment
from comment.permissions import IsAuthor, ReadOnly
from comment.serializer import CommentsSerializer, CreateCommentsSerializer

User = get_user_model()


class ListCommentsView(ListAPIView):
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'user_id'


class CreateCommentsView(CreateAPIView):
    serializer_class = CreateCommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'post_id'

    def perform_create(self, serializer):
        serializer.save(post_id=self.kwargs['post_id'], commenter=self.request.user)
#asd



class ListCommentsUserView(ListAPIView):
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = Comment.objects.filter(commenter_id=self.kwargs['user_id'])
        return queryset


class RetrieveUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateCommentsSerializer
    queryset = Comment.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'comment_id'
