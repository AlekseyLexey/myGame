import type React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lebelText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ lebelText, ...props }) => {
  return (
    <label className={styles.label}>
      {lebelText}
      <input {...props} />
    </label>
  );
};
