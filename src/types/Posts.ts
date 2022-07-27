export interface PostsProps {
  id: number;
  avatarUrl: string;
  author: string;
  role: string;
  publishedAt: Date;
  content: {
    title: string;
    text: string;
  };
}
