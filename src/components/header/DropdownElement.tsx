import { MouseEventHandler } from "react";
import classes from "./DropdownElement.module.css";

interface DropdownElementProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const DropdownElement: React.FC<DropdownElementProps> = ({ label, onClick }) => {
  return (
    <button className={classes.dropdownElement} onClick={onClick}>
      {label}
    </button>
  );
};

export default DropdownElement;
