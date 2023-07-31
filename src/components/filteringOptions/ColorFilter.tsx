import { ChangeEventHandler } from "react";

import { Product } from "../../types";

import classes from "./ColorFilter.module.css";
// To color each part of the slider track seperaetly, we need to use
// varaible class names that don't work very well with CSS modules
// Use the global stylesheet ONLY for this!
import "./ColorFilterSliderTrack.css";

const ColorFilter: React.FC<{
  products: Product[];
  updateColorFilter: (newValue: string) => void;
}> = (props) => {
  let productColors: string[] = [];

  const colorSelectHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.updateColorFilter(event.target.value);
  };

  //Make a list of all product colors, without repeating
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
          <div key={el}>
            <input
              name="color"
              type="radio"
              aria-labelledby={`${el}label`}
              onChange={colorSelectHandler}
              value={el}
            ></input>
            <label id={`${el}label`}>{el}</label>
          </div>
        );
      })}
    </div>
  );
};

export default ColorFilter;
