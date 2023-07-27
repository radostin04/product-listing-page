import ReactSlider from "react-slider";

import { Product } from "../../types";

import classes from "./PriceFilter.module.css"
import { useEffect, useContext } from "react";
import useProductsContext from "../../store/products-context";
const PriceFilter: React.FC<{products: Product[]}> = (props) => {

  const productsCtx = useContext(useProductsContext());
  let productPrices: number[] = []

  const priceFilterChangeHandler = (newValue: number[], index: number) => {
    productsCtx.resetFilters();
    productsCtx.filterProductsByPrice(newValue[0], newValue[1]);
    console.log(newValue);
  }
  props.products.map(el => {
    if(!productPrices.find(element => element === Math.round(el.price))) {
      productPrices.push(Math.round(el.price));
    }
    return;
  })
  
  const lowestPrice = Math.min(...productPrices);
  const highestPrice = Math.max(...productPrices)

  return (
    <div className={classes.container}>
      <ReactSlider 
      className={classes.slider}
      trackClassName={classes.sliderTrack}
      thumbClassName={classes.sliderThumb}
      defaultValue={[lowestPrice, highestPrice]}
      renderThumb={(props, state) => <div {...props}><p>{state.valueNow}</p></div>}
      marks={productPrices}
      min={lowestPrice}
      max={highestPrice}
      onAfterChange={priceFilterChangeHandler}
      />
    </div>
  )
}

export default PriceFilter;