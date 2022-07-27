import { useCallback, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { api } from "../services/api";
import { PostsProps } from "../types/Posts";

export function usePosts() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/posts");

      if (response.status === 200) {
        const formattedPosts = response.data.map((post: PostsProps) => ({
          ...post,
          publishedAt: formatDate(post.publishedAt),
        }));
        setPosts(formattedPosts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    posts,
    loading,
    getPosts,
  };
}
