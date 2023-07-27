import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotificationsContextProvider } from "./store/notifications-context";
import { ProductsContextProvider } from "./store/products-context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <NotificationsContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </NotificationsContextProvider>
  </React.StrictMode>
);
