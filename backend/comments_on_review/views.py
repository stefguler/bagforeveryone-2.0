from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from comments_on_review.models import Comments
from comments_on_review.permissions import IsAuthor, ReadOnly
from comments_on_review.serializer import CommentsSerializer, CreateCommentsSerializer

User = get_user_model()


class ListCommentsView(ListAPIView):
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comments.objects.all()
    lookup_url_kwarg = 'user_id'


class CreateCommentsView(CreateAPIView):
    serializer_class = CreateCommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Comments.objects.all()
    lookup_url_kwarg = 'review_id'

    def perform_create(self, serializer):
        serializer.save(review_id=self.kwargs['review_id'], author=self.request.user)
#asd



class ListCommentsUserView(ListAPIView):
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_url_kwarg = 'user_id'

    def get_queryset(self, **kwargs):
        queryset = Comments.objects.filter(author_id=self.kwargs['user_id'])
        return queryset


class RetrieveUpdateDeleteCommentView(RetrieveUpdateDestroyAPIView):
    serializer_class = CreateCommentsSerializer
    queryset = Comments.objects.all()
    permission_classes = [IsAuthor | IsAdminUser | ReadOnly]
    lookup_url_kwarg = 'comment_id'
