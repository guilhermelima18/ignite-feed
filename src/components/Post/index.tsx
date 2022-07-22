import { useState } from "react";
import profileImage from "../../assets/profile-image-02.png";
import { Button } from "../Button";
import { CardComments } from "../CardComments";
import { Textarea } from "../Textarea";

import styles from "./styles.module.scss";

interface PostsProps {
  id: number;
  name: string;
  comment: string;
}

export const Post = () => {
  const [textarea, setTextarea] = useState<string>("");
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const generateRandomNumber = (min: number, max: number) => {
    const randomId = Math.random() * (max - min) + min;
    return Number(randomId.toFixed(2));
  };

  const createComment = () => {
    let newComment = {
      id: generateRandomNumber(5, 1000),
      name: "Guilherme Lima",
      comment: textarea,
    };

    setPosts([...posts, newComment]);
    setTextarea("");
  };

  return (
    <section className={styles.sectionPost}>
      <header className={styles.headerPost}>
        <div className={styles.profilePost}>
          <img src={profileImage} alt="Imagem de Perfil" />
          <div>
            <h3>Jane Cooper</h3>
            <span>Dev Front-End</span>
          </div>
        </div>
        <p>Publicado há 1h</p>
      </header>
      <main className={styles.mainPost}>
        <h4>Fala galera 👋</h4>
        <br />
        <h4>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </h4>
        <br />
        <h4 className={styles.link}>
          👉 jane.design/doctorcare
          <br />
          <br />
          #novoprojeto #nlw #rocketseat
        </h4>
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
              onClick={createComment}
            />
          )}
        </div>
      </section>
      <section>
        {posts &&
          posts.map((post) => <CardComments key={post.id} post={post} />)}
      </section>
    </section>
  );
};
