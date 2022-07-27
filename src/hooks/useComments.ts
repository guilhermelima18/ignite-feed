import { useCallback, useState } from "react";
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
        setComments(response.data);
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
        const response = await api.post(`/posts/${postId}/comments`, {
          ...bodyParams,
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return {
    comments,
    getComments,
    createComments,
    loading,
  };
}
