import ReactSlider from "react-slider";

import { Product } from "../../types";


import classes from "./FilteringOptions.module.css"
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";

const FilteringOptions: React.FC<{products: Product[]}> = (props) => {
  return (
    <div className={classes.container}>
      <h6 className={classes.priceHeader}>Filter by price:</h6>
      <PriceFilter products={props.products} />
      <h6 className={classes.colorHeader}>Filter by color:</h6>
      <ColorFilter products={props.products} />
    </div>
  )
}

export default FilteringOptions;