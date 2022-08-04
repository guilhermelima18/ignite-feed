import { useCallback, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { api } from "../services/api";

interface BodyCommentParams {
  name: string;
  comment: string;
  publishedAt: Date;
}

interface CommentsProps {
  id: number;
  postId: string;
  name: string;
  avatarUrl: string;
  comment: string;
  publishedAt: Date;
}

export function useComments() {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getComments = useCallback(async (postId: number) => {
    try {
      setLoading(true);
      const response = await api.get(`/posts/${postId}/comments`);

      if (response.status === 200) {
        const commentsFormatted = response.data.map(
          (comment: CommentsProps) => ({
            ...comment,
            publishedAt: formatDate(comment.publishedAt),
          })
        );
        setComments(commentsFormatted);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createComments = useCallback(
    async (postId: number, bodyParams: BodyCommentParams) => {
      try {
        setLoading(true);
        const response = await api.post(`/posts/${postId}/comments`, {
          ...bodyParams,
        });

        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const removeComment = useCallback(async (commentId: number) => {
    try {
      setLoading(true);
      const response = await api.delete(`/comments/${commentId}`);

      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    comments,
    getComments,
    createComments,
    removeComment,
    loading,
  };
}
