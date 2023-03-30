import Link from "next/link";
import { ReactNode } from "react";
import { btnWrapper, btn } from "./button.css";

interface Props {
  theme?: "primary" | "wide" | "full" | "icon" | "iconTrash";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ theme = "primary", children, onClick }: Props) => {
  return (
    <div className={btnWrapper}>
      <button className={btn[theme]} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
