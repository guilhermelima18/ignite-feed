import profileImage from "../../assets/profile-image-03.png";

import styles from "./styles.module.scss";

interface CardCommentsProps {
  post: {
    id: number;
    name: string;
    comment: string;
  };
}

export const CardComments = ({ post }: CardCommentsProps) => {
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
            <p>Lixeira</p>
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
