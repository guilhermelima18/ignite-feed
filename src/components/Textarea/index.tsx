import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
} from "react";
import styles from "./styles.module.scss";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Textarea = ({ value, setValue, ...rest }: TextareaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea className={styles.textarea} onChange={handleChange} {...rest} />
  );
};
