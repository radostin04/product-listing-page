import { useCallback, useContext, useEffect, useState } from "react";

import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import useProductsContext from "../../store/products-context";

import classes from "./FilteringOptions.module.css";

const FilteringOptions: React.FC<{ forceShow: boolean }> = ({ forceShow }) => {
  const productsCtx = useContext(useProductsContext());

  const [priceFilter, setPriceFilter] = useState<number[] | undefined>();
  const [colorFilter, setColorFilter] = useState<string | undefined>();

  useEffect(() => {
    //Reset existing filters before setting new filters
    productsCtx.resetFilters();
    productsCtx.filterProducts(priceFilter, colorFilter);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceFilter, colorFilter, productsCtx.allProducts]);

  const updatePriceFilter = useCallback((newValue: number[]) => {
    setPriceFilter(newValue);
  }, []);
  const updateColorFilter = useCallback((newValue: string) => {
    setColorFilter(newValue);
  }, []);

  return (
    <div className={`${classes.container} ${forceShow ? classes.forceShow : ""}`}>
      <h6 className={classes.priceHeader}>Filter by price:</h6>
      <PriceFilter products={productsCtx.allProducts} updatePriceFilter={updatePriceFilter} />
      <h6 className={classes.colorHeader}>Filter by color:</h6>
      <ColorFilter products={productsCtx.allProducts} updateColorFilter={updateColorFilter} />
    </div>
  );
};

export default FilteringOptions;
