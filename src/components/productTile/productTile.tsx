import StarsRating from "./starsRating";
import classes from "./productTile.module.css";
import { MouseEventHandler } from "react";

const ProductTile: React.FC<{
  name: string;
  description: string;
  price: number;
  discount?: number;
  rating: number;
  image: string;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  const priceClasses = props.discount ? `${classes.price} ${classes.discount}` : `${classes.price}`;
  return (
    <div className={classes.container}>
      <img src={props.image} alt=""></img>
      <h6>{props.name}</h6>
      <p>{props.description}</p>
      <StarsRating stars={props.rating}></StarsRating>
      <div className={classes.priceAndAddContainer}>
        <div className={priceClasses}>
          <p>${props.price}</p>
          {props.discount ? <p>-{props.discount}%</p> : null}
        </div>
        <div className={classes.addButton}>
          <button onClick={props.onClickButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
