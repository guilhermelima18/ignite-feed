import { Post } from "../../components/Post";
import { ProfileCard } from "../../components/ProfileCard";

import styles from "../../styles/Home.module.scss";

export const Home = () => {
  return (
    <main className={styles.homeWrapper}>
      <ProfileCard />
      <section>
        <Post />
      </section>
    </main>
  );
};
