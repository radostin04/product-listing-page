import { useContext } from "react";
import classes from "./LayoutGrid.module.css"
import useProductsContext from "../../store/products-context";
import CategoryHeader from "../categoryHeader/CategoryHeader";
import FilteringOptions from "../filteringOptions/FilteringOptions";
import ProductGrid from "../productGrid/productGrid";

const LayoutGrid = () => {
  const productsCtx = useContext(useProductsContext());
  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
      <FilteringOptions></FilteringOptions>
      </div>
      <div className={classes.productsContainer}>
        <div className={classes.productsHeader}>
          <CategoryHeader categoryName={productsCtx.activeCategory!.name} description={productsCtx.activeCategory!.description} />
        </div>
        <ProductGrid products={productsCtx.filteredProducts}></ProductGrid>
      </div>
    </div>
  )
}

export default LayoutGrid;