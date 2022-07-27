import { ButtonHTMLAttributes } from "react";
import { PencilLine } from "phosphor-react";

import styles from "./styles.module.scss";
import { SpinLoading } from "../SpinLoading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  mode: "publish" | "edit";
  isLoading?: boolean;
}

export const Button = ({
  textButton,
  mode,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {mode === "edit" ? (
        <button className={styles.buttonEdit} {...rest}>
          <PencilLine size={20} />
          {textButton}
        </button>
      ) : (
        <button className={styles.buttonPublish} {...rest}>
          {isLoading ? (
            <SpinLoading typeLoading="spin" color="#ffffff" />
          ) : (
            textButton
          )}
        </button>
      )}
    </>
  );
};
