import ReactSlider from "react-slider";

import { Product } from "../../types";

import classes from "./PriceFilter.module.css"

const PriceFilter: React.FC<{products: Product[], updatePriceFilter: (newValue: number[]) => void}> = (props) => {

  let productPrices: number[] = []

  const priceFilterChangeHandler = (newValue: number[], index: number) => {
    props.updatePriceFilter(newValue);
  }
  props.products.map(el => {
    if(!productPrices.find(element => element === Math.round(el.price))) {
      productPrices.push(Math.round(el.price));
    }
    return undefined;
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