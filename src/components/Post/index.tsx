import { useCallback, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { useComments } from "../../hooks/useComments";
import { PostsProps } from "../../types/Posts";
import { Button } from "../Button";
import { CardComments } from "../CardComments";
import { SkeletonLoading } from "../SkeletonLoading";
import { Textarea } from "../Textarea";

import styles from "./styles.module.scss";

interface PostProps {
  post: PostsProps;
}

export const Post = ({ post }: PostProps) => {
  const {
    getComments,
    createComments,
    removeComment,
    comments,
    loading: loadingGetComments,
  } = useComments();
  const [commentPost, setCommentPost] = useState<string>("");

  const loading = loadingGetComments;

  useEffect(() => {
    if (post.id) {
      getComments(post.id);
    }
  }, []);

  const createComment = useCallback(
    async (postId: number) => {
      const randomName = faker.name.findName();
      const randomAvatarUrl = faker.image.people(300, 300, true);

      const createCommentParams = {
        name: randomName,
        avatarUrl: randomAvatarUrl,
        comment: commentPost,
        publishedAt: new Date(),
      };

      const response = await createComments(postId, createCommentParams);

      if (response?.status === 201) {
        getComments(postId);
        setCommentPost("");
      }
    },
    [commentPost]
  );

  const deleteComment = useCallback(
    async (commentId: number, postId: number) => {
      const response = await removeComment(commentId);

      if (response?.status === 200) {
        getComments(postId);
      }
    },
    []
  );

  const LoadingOrCardComments = () => {
    return (
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
              handleDeleteComment={deleteComment}
            />
          ))
        )}
      </section>
    );
  };

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
        <time>{post.publishedAt.toString()}</time>
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
            value={commentPost}
            setValue={setCommentPost}
            placeholder="Escreva um comentário..."
          />
          {commentPost.length > 0 && (
            <Button
              textButton="Publicar"
              mode="publish"
              onClick={() => createComment(post.id)}
              isLoading={loading}
            />
          )}
        </div>
      </section>
      <LoadingOrCardComments />
    </section>
  );
};
