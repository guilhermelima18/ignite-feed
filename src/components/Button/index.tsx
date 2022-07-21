import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  mode: "publish" | "edit";
}

export const Button = ({ textButton, mode }: ButtonProps) => {
  return (
    <>
      {mode === "edit" ? (
        <button className={styles.buttonEdit}>{textButton}</button>
      ) : (
        <button className={styles.buttonPublish}>{textButton}</button>
      )}
    </>
  );
};
