import { MouseEventHandler } from "react";

import classes from "./DropdownElement.module.css";

interface DropdownElementProps {
  label: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const DropdownElement: React.FC<DropdownElementProps> = ({ label, onClick, className }) => {
  return (
    <button className={`${classes.dropdownElement} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default DropdownElement;
