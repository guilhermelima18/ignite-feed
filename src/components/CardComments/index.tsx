import { Trash } from "phosphor-react";
import profileImage from "../../assets/profile-image-03.png";

import styles from "./styles.module.scss";

interface CardCommentsProps {
  comment: {
    id: number;
    postId: string;
    name: string;
    comment: string;
    publishedAt: Date;
  };
  /* removeComment: (postId: number) => void; */
}

export const CardComments = ({ comment }: CardCommentsProps) => {
  return (
    <div className={styles.mainComments}>
      <div className={styles.imageBox}>
        <img src={profileImage} alt="Imagem de Perfil" />
      </div>
      <div className={styles.main}>
        <main>
          <header>
            <div>
              <h4>
                {comment.name} <span>(você)</span>
              </h4>
              <p>Cerca de 2h</p>
            </div>
            <button
              className={styles.btnTrash}
              /* onClick={() => removeComment(comment.id)} */
            >
              <Trash size={20} />
            </button>
          </header>
          <div className={styles.comment}>
            <h5>{comment.comment}</h5>
          </div>
        </main>
        <footer>
          <span>Aplaudir</span>
        </footer>
      </div>
    </div>
  );
};
