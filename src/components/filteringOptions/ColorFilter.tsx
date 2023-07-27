import { ChangeEventHandler } from "react";
import { Product } from "../../types";
import classes from "./ColorFilter.module.css";

const ColorFilter: React.FC<{
  products: Product[];
  updateColorFilter: (newValue: string) => void;
}> = (props) => {
  let productColors: string[] = [];

  const colorSelectHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.updateColorFilter(event.target.value);
  };

  props.products.map((el) => {
    if (!productColors.find((element) => element === el.color)) {
      productColors.push(el.color);
    }
    return undefined;
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
