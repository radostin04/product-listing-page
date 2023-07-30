import { useContext } from "react";

import NotificationDisplay from "./components/notifications/NotificationDisplay";
import useProductsContext from "./store/products-context";
import LayoutGrid from "./components/layoutGrid/LayoutGrid";
import Header from "./components/header/Header";

//Import global styles
import "./App.css";
import "./colors.css";
import "./button.css";
import Footer from "./components/footer/Footer";

function App() {
  const productsCtx = useContext(useProductsContext());

  return (
    <div>
      <NotificationDisplay portalElementID="portal"></NotificationDisplay>
      <Header />
      {productsCtx.activeCategory ? (
        //setting a key will cause a full re-render and state reset when
        //we change categories
        <LayoutGrid key={productsCtx.activeCategory.id} />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
