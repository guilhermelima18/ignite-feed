import backgroundImg from "../../assets/rectangle-card.svg";
import profileImg from "../../assets/profile-image.png";

import styles from "./styles.module.scss";
import { Button } from "../Button";

export const ProfileCard = () => {
  return (
    <div className={styles.profileCardWrapper}>
      <div className={styles.imageBox}>
        <img src={backgroundImg} alt="Imagem de Folhas" />
      </div>
      <section className={styles.profileInformation}>
        <img src={profileImg} alt="Imagem de Perfil" />
        <div>
          <h2>Leslie Alexander</h2>
          <p>UI Designer</p>
        </div>
      </section>
      <footer>
        <Button textButton="Editar seu perfil" mode="edit" />
      </footer>
    </div>
  );
};
