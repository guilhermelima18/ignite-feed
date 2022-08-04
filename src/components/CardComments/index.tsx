import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./styles.module.scss";

interface CardCommentsProps {
  comment: {
    id: number;
    postId: string;
    avatarUrl: string;
    name: string;
    comment: string;
    publishedAt: Date;
  };
  handleDeleteComment: (commentId: number, postId: number) => void;
}

export const CardComments = ({
  comment,
  handleDeleteComment,
}: CardCommentsProps) => {
  const [applaudComment, setApplaudComment] = useState(0);

  const handleApplaudComment = () => {
    setApplaudComment((prevState) => prevState + 1);
  };

  return (
    <div className={styles.mainComments}>
      <div className={styles.imageBox}>
        <img src={comment.avatarUrl} alt="Imagem de Perfil" />
      </div>
      <div className={styles.main}>
        <main>
          <header>
            <div>
              <h4>
                {comment.name} <span>(você)</span>
              </h4>
              <p>{comment.publishedAt.toString()}</p>
            </div>
            <button
              className={styles.btnTrash}
              onClick={() =>
                handleDeleteComment(comment.id, Number(comment.postId))
              }
            >
              <Trash size={20} />
            </button>
          </header>
          <div className={styles.comment}>
            <h5>{comment.comment}</h5>
          </div>
        </main>
        <footer>
          <button className={styles.btnTrash} onClick={handleApplaudComment}>
            <ThumbsUp size={16} weight="light" color="white" />
            Aplaudir
          </button>
          {applaudComment > 0 && <span>{applaudComment}</span>}
        </footer>
      </div>
    </div>
  );
};
