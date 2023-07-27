import ReactSlider from "react-slider";

import { Product } from "../../types";


import classes from "./FilteringOptions.module.css"
import PriceFilter from "./PriceFilter";

const FilteringOptions: React.FC<{products: Product[]}> = (props) => {
  return (
    <div className={classes.container}>
      <PriceFilter products={props.products} />
    </div>
  )
}

export default FilteringOptions;