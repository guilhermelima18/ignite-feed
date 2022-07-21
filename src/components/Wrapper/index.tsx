import { ReactNode } from "react";

import styles from "./styles.module.scss";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <section className={styles.wrapperContainer}>{children}</section>;
};
