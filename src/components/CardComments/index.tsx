import { Trash } from "phosphor-react";
import profileImage from "../../assets/profile-image-03.png";

import styles from "./styles.module.scss";

interface CardCommentsProps {
  post: {
    id: number;
    name: string;
    comment: string;
  };
  removeComment: (postId: number) => void;
}

export const CardComments = ({ post, removeComment }: CardCommentsProps) => {
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
                {post.name} <span>(você)</span>
              </h4>
              <p>Cerca de 2h</p>
            </div>
            <button
              className={styles.btnTrash}
              onClick={() => removeComment(post.id)}
            >
              <Trash size={20} />
            </button>
          </header>
          <div className={styles.comment}>
            <h5>{post.comment}</h5>
          </div>
        </main>
        <footer>
          <span>Aplaudir</span>
        </footer>
      </div>
    </div>
  );
};
