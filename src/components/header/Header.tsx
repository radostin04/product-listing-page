import { useContext } from "react";
import useProductsContext from "../../store/products-context";
import Dropdown from "../dropdown/Dropdown";
import DropdownElement from "../dropdown/DropdownElement";
import classes from "./header.module.css";

const Header = () => {
  const productsCtx = useContext(useProductsContext());

  return (
    <>
      <div className={classes.dummyHeader + " " + classes.header}></div>
      <div className={classes.header}>
        <div className={classes.logoContainer}>
        <img src="/images/H&M-Logo.svg" alt="logo"/>
        </div>
        <div className={classes.categoriesContainer}>
        <Dropdown className={classes.dropdown} buttonText="Men">
          <DropdownElement
            label="Shirts"
            onClick={() => {
              productsCtx.activateCategory("shirtsMen");
            }}
            className={classes.dropdownElement}
          ></DropdownElement>
          <DropdownElement
            label="Shoes"
            onClick={() => {
              productsCtx.activateCategory("shoesMen");
            }}
            className={classes.dropdownElement}
          ></DropdownElement>
        </Dropdown>
        <Dropdown className={classes.dropdown} buttonText="Women">
          <DropdownElement
            label="Dresses"
            onClick={() => {
              productsCtx.activateCategory("dressesWomen");
            }}
            className={classes.dropdownElement}
          ></DropdownElement>
          <DropdownElement
            label="Shoes"
            onClick={() => {
              productsCtx.activateCategory("shoesWomen");
            }}
            className={classes.dropdownElement}
          ></DropdownElement>
        </Dropdown>

        </div>
      </div>
    </>
  );
};

export default Header;
