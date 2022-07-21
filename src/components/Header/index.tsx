import Logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Ignite Feed" />
      <h1>Ignite Feed</h1>
    </header>
  );
};
