import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductTile from "./components/productTile/productTile";
import useNotificationContext, {
  NotificationsContextProvider,
} from "./store/notifications-context";
import NotificationDisplay from "./components/notifications/NotificationDisplay";

import shirtsMen from "./products/shirts-men.json";
import { Product } from "./types";
import ProductGrid from "./components/productGrid/productGrid";
import FilteringOptions from "./components/filteringOptions/FilteringOptions";
import useProductsContext from "./store/products-context";
import CategoryHeader from "./components/categoryHeader/CategoryHeader";

function App() {
  const testProducts: Product[] = shirtsMen;
  const productsCtx = useContext(useProductsContext());

  return (
    <div>
      <NotificationDisplay portalElementID="portal"></NotificationDisplay>
      {productsCtx.activeCategory ? (
        <>
          <CategoryHeader categoryName={productsCtx.activeCategory.name} description={productsCtx.activeCategory.description} />
          <FilteringOptions products={productsCtx.allProducts}></FilteringOptions>
          <ProductGrid products={productsCtx.filteredProducts}></ProductGrid>
        </>
      ) : null}
    </div>
  );
}

export default App;
