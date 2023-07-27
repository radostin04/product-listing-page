import { useContext } from "react";
import useProductsContext from "../../store/products-context";
import Dropdown from "./Dropdown";
import DropdownElement from "./DropdownElement";
import classes from "./header.module.css";

const Header = () => {
  const productsCtx = useContext(useProductsContext());

  return (
    <>
      <div className={classes.dummyHeader + " " + classes.header}></div>
      <div className={classes.header}>
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
    </>
  );
};

export default Header;
