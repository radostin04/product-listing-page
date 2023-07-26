import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotificationsContextProvider } from "./store/notifications-context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <NotificationsContextProvider>
      <App />
    </NotificationsContextProvider>
  </React.StrictMode>
);
