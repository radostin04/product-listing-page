import { useContext, useState } from "react";
import classes from "./LayoutGrid.module.css"
import useProductsContext from "../../store/products-context";
import CategoryHeader from "../categoryHeader/CategoryHeader";
import FilteringOptions from "../filteringOptions/FilteringOptions";
import ProductGrid from "../productGrid/productGrid";
import Dropdown from "../dropdown/Dropdown";
import DropdownElement from "../dropdown/DropdownElement";
import { sortAZ, sortPriceAsc, sortPriceDec, sortZA } from "../../sorters";
import { Product } from "../../types";

const LayoutGrid = () => {
  const productsCtx = useContext(useProductsContext());
  const [activeSortingMode, setActiveSotringMode] = useState<"A-Z" | "Z-A" | "Price (asc.)" | "Price (dec.)">("A-Z")

  let sortedProducts:Product[] = [];
  switch (activeSortingMode) {
    case "A-Z":
      sortedProducts = sortAZ(productsCtx.filteredProducts);
      break;
    case "Z-A":
      sortedProducts = sortZA(productsCtx.filteredProducts);
      break;
    case "Price (asc.)":
      sortedProducts = sortPriceAsc(productsCtx.filteredProducts);
      break;
    case "Price (dec.)":
      sortedProducts = sortPriceDec(productsCtx.filteredProducts)
      break;
  }


  const [forceShowFilters, setForceShowFilters] = useState<boolean>(false)
  return (
    <div className={classes.container}>
      <div className={classes.filterContainer} >
        <FilteringOptions forceShow={forceShowFilters}></FilteringOptions>
      </div>
      <div className={classes.productsHeader}>
        <CategoryHeader categoryName={productsCtx.activeCategory!.name} description={productsCtx.activeCategory!.description} />
        <button className={classes.filtersButton} onClick={() => {setForceShowFilters(true)}}>Filters</button>
        <Dropdown buttonText={`Sort: ${activeSortingMode}`}>
          <DropdownElement className={classes.dropdownElement} label="A-Z" onClick={() => {setActiveSotringMode("A-Z")}}></DropdownElement>
          <DropdownElement className={classes.dropdownElement} label="Z-A" onClick={() => {setActiveSotringMode("Z-A")}}></DropdownElement>
          <DropdownElement className={classes.dropdownElement} label="Price (asc.)" onClick={() => {setActiveSotringMode("Price (asc.)")}}></DropdownElement>
          <DropdownElement className={classes.dropdownElement} label="Price (dec.) " onClick={() => {setActiveSotringMode("Price (dec.)")}}></DropdownElement>
        </Dropdown>
      </div>
      <div className={classes.productsContainer}>
        <ProductGrid products={sortedProducts}></ProductGrid>
      </div>
    </div>
  )
}

export default LayoutGrid;