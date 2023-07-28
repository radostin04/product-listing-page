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
        <Dropdown buttonText="Men">
          <DropdownElement
            label="Shirts"
            onClick={() => {
              productsCtx.activateCategory("shirtsMen");
            }}
          ></DropdownElement>
          <DropdownElement
            label="Shoes"
            onClick={() => {
              productsCtx.activateCategory("shoesMen");
            }}
          ></DropdownElement>
        </Dropdown>
        <Dropdown buttonText="Women">
          <DropdownElement
            label="Dresses"
            onClick={() => {
              productsCtx.activateCategory("dressesWomen");
            }}
          ></DropdownElement>
          <DropdownElement
            label="Shoes"
            onClick={() => {
              productsCtx.activateCategory("shoesWomen");
            }}
          ></DropdownElement>
        </Dropdown>

        </div>
      </div>
    </>
  );
};

export default Header;
