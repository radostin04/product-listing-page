import { ChangeEventHandler, useContext } from "react";
import { Product } from "../../types";
import classes from "./ColorFilter.module.css";
import useProductsContext from "../../store/products-context";

const ColorFilter: React.FC<{ products: Product[] }> = (props) => {
  let productColors: string[] = [];
  const productsCtx = useContext(useProductsContext());
  

  const colorSelectHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    productsCtx.resetFilters();
    productsCtx.filterProductsByColor(event.target.value);
  };

  props.products.map((el) => {
    if (!productColors.find((element) => element === el.color)) {
      productColors.push(el.color);
    }
    return;
  });

  return (
    <div className={classes.container}>
      {productColors.map((el) => {
        return (
          <div>
            <input
              name="color"
              type="radio"
              aria-labelledby={`${el}label`}
              onChange={colorSelectHandler}
              value={el}
              key={el}
            ></input>
            <label id={`${el}label`}>{el}</label>
          </div>
        );
      })}
    </div>
  );
};

export default ColorFilter;
