import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BasketProvider from "./context/BasketProvider.jsx";
import WishListProvider from "./context/WishlistProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BasketProvider>
      <WishListProvider>
      <App />
      </WishListProvider>
    </BasketProvider>
  </StrictMode>
);
