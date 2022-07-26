import { ButtonHTMLAttributes } from "react";
import { PencilLine } from "phosphor-react";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  mode: "publish" | "edit";
}

export const Button = ({ textButton, mode, ...rest }: ButtonProps) => {
  return (
    <>
      {mode === "edit" ? (
        <button className={styles.buttonEdit} {...rest}>
          <PencilLine size={20} />
          {textButton}
        </button>
      ) : (
        <button className={styles.buttonPublish} {...rest}>
          {textButton}
        </button>
      )}
    </>
  );
};
