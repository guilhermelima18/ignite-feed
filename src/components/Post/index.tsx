import { useEffect, useState } from "react";
import { generateNumber } from "../../helpers/generateNumber";
import { useComments } from "../../hooks/useComments";
import { PostsProps } from "../../types/Posts";
import { Button } from "../Button";
import { CardComments } from "../CardComments";
import { SkeletonLoading } from "../SkeletonLoading";
import { Textarea } from "../Textarea";

import styles from "./styles.module.scss";

interface CommentsProps {
  id: number;
  name: string;
  comment: string;
}

interface PostProps {
  post: PostsProps;
}

export const Post = ({ post }: PostProps) => {
  const {
    getComments,
    createComments,
    comments,
    loading: loadingGetComments,
  } = useComments();
  const [loadingComment, setLoadingComment] = useState(false);
  const [textarea, setTextarea] = useState<string>("");
  const [newComment, setNewComment] = useState(false);

  const loading = loadingComment || loadingGetComments;

  useEffect(() => {
    if (post.id) {
      getComments(post.id);
    }
  }, [newComment]);

  const createComment = async (postId: number) => {
    setLoadingComment(true);
    const params = {
      name: "Teste",
      comment: textarea,
      publishedAt: new Date(),
    };

    const response = await createComments(Number(postId), params);

    if (response?.status === 201) {
      setNewComment(true);
    }

    setLoadingComment(false);
    setTextarea("");
  };

  /* const removeComment = (postId: number) => {
    const newComments = [...comments];
    const commentIndex = newComments.findIndex((post) => post.id === postId);

    newComments.splice(commentIndex, 1);
    setComments([...newComments]);

    localStorage.setItem("@ignite-feed", JSON.stringify(newComments));
  }; */

  return (
    <section className={styles.sectionPost}>
      <header className={styles.headerPost}>
        <div className={styles.profilePost}>
          <img src={post.avatarUrl} alt="Imagem de Perfil" />
          <div>
            <h3>{post.author}</h3>
            <span>{post.role}</span>
          </div>
        </div>
        <p>Publicado em {post.publishedAt.toString()}</p>
      </header>
      <main className={styles.mainPost}>
        <h4>{post.content.title}</h4>
        <br />
        <h4>{post.content.text}</h4>
      </main>
      <section className={styles.feedbackPost}>
        <h3>Deixe seu feedback</h3>
        <div className={styles.feedbackText}>
          <Textarea
            value={textarea}
            setValue={setTextarea}
            placeholder="Escreva um comentário..."
          />
          {textarea.length > 0 && (
            <Button
              textButton="Publicar"
              mode="publish"
              onClick={() => createComment(post.id)}
              isLoading={loading}
            />
          )}
        </div>
      </section>
      <section>
        {loading ? (
          <SkeletonLoading />
        ) : comments.length === 0 ? (
          <p className={styles.noComments}>Sem comentários</p>
        ) : (
          comments.map((comment) => (
            <CardComments
              key={comment.id}
              comment={comment}
              /* removeComment={removeComment} */
            />
          ))
        )}
      </section>
    </section>
  );
};
