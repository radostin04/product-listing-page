import StarsRating from "./starsRating";
import classes from "./productTile.module.css";
import { MouseEventHandler } from "react";
import React from "react";

const ProductTile: React.FC<{
  name: string;
  description: string;
  price: number;
  discount: number | null;
  rating: number;
  image: string;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
}> = React.memo((props) => {
  const priceClasses = props.discount ? `${classes.price} ${classes.discount}` : `${classes.price}`;

  let finalPrice = props.price.toFixed(2);

  return (
    <div className={classes.container}>
      <img src={props.image} alt=""></img>
      <h6>{props.name}</h6>
      <StarsRating stars={props.rating}></StarsRating>
      <p>{props.description}</p>
      <div className={classes.priceAndAddContainer}>
        <div className={priceClasses}>
          <p className={classes.priceText}>${finalPrice}</p>
          {props.discount ? <p className={classes.discountText}>-{props.discount}%</p> : null}
        </div>
        <div className={classes.addButton}>
          <button onClick={props.onClickButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
});

export default ProductTile;
