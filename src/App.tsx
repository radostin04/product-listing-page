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
import LayoutGrid from "./components/layoutGrid/LayoutGrid";
import Header from "./components/header/Header";

import "./colors.css";
function App() {
  const testProducts: Product[] = shirtsMen;
  const productsCtx = useContext(useProductsContext());

  return (
    <div>
      <NotificationDisplay portalElementID="portal"></NotificationDisplay>
      <Header />
      {productsCtx.activeCategory ? (
        //setting a key will cause a full re-render and state reset when 
        //we change categories
        <LayoutGrid key={productsCtx.activeCategory.id}/>
      ) : null}
    </div>
  );
}

export default App;
