import { useContext, useEffect, useState } from "react";

import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import useProductsContext from "../../store/products-context";

import classes from "./FilteringOptions.module.css";

const FilteringOptions: React.FC = () => {
  const productsCtx = useContext(useProductsContext());

  const [priceFilter, setPriceFilter] = useState<number[] | undefined>();
  const [colorFilter, setColorFilter] = useState<string | undefined>();

  useEffect(() => {
    productsCtx.resetFilters();
    if (priceFilter) {
      productsCtx.filterProductsByPrice(priceFilter);
    }
    if (colorFilter) {
      productsCtx.filterProductsByColor(colorFilter);
    }
  }, [priceFilter, colorFilter, productsCtx]);

  const updatePriceFilter = (newValue: number[]) => {
    setPriceFilter(newValue);
  };
  const updateColorFilter = (newValue: string) => {
    setColorFilter(newValue);
  };

  return (
    <div className={classes.container}>
      <h6 className={classes.priceHeader}>Filter by price:</h6>
      <PriceFilter products={productsCtx.allProducts} updatePriceFilter={updatePriceFilter} />
      <h6 className={classes.colorHeader}>Filter by color:</h6>
      <ColorFilter products={productsCtx.allProducts} updateColorFilter={updateColorFilter} />
    </div>
  );
};

export default FilteringOptions;
