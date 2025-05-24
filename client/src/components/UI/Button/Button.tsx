import type React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {buttonText}
    </button>
  );
};
