import { useState } from "react";
import classes from "./Dropdown.module.css";

interface DropdownProps {
  buttonText: string;
  className?: string
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
    //update state using callback when it depends on previous state
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`${classes.dropdownContainer} ${className}` }>
      <div
        className={`${classes.dropdown} ${isOpen ? classes.active : ""}`}
        onClick={menuClickHandler}
      >
        <button className={classes.dropdownButton}>{buttonText}</button>
        {isOpen ? <div className={classes.dropdownContent}>{children}</div> : null}
      </div>
    </div>
  );
};

export default Dropdown;
