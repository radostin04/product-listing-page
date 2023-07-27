import { useContext, useState } from "react";
import classes from "./LayoutGrid.module.css"
import useProductsContext from "../../store/products-context";
import CategoryHeader from "../categoryHeader/CategoryHeader";
import FilteringOptions from "../filteringOptions/FilteringOptions";
import ProductGrid from "../productGrid/productGrid";

const LayoutGrid = () => {
  const productsCtx = useContext(useProductsContext());

  const [forceShowFilters, setForceShowFilters] = useState<boolean>(false)
  return (
    <div className={classes.container}>
      <div className={classes.filterContainer} >
        <FilteringOptions forceShow={forceShowFilters}></FilteringOptions>
      </div>
      <div className={classes.productsHeader}>
        <CategoryHeader categoryName={productsCtx.activeCategory!.name} description={productsCtx.activeCategory!.description} />
        <button onClick={() => {setForceShowFilters(true)}}>filter</button>
      </div>
      <div className={classes.productsContainer}>
        <ProductGrid products={productsCtx.filteredProducts}></ProductGrid>
      </div>
    </div>
  )
}

export default LayoutGrid;