import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { ProfileCard } from "../../components/ProfileCard";
import { SkeletonLoading } from "../../components/SkeletonLoading";

import { usePosts } from "../../hooks/usePosts";

import styles from "../../styles/Home.module.scss";

export const Home = () => {
  const { getPosts, posts, loading } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className={styles.homeWrapper}>
      <ProfileCard />
      <section>
        {loading ? (
          <div className={styles.loadingContainer}>
            <SkeletonLoading countLines={15} />
          </div>
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </section>
    </main>
  );
};
