import { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlist, setwishlist] = useLocalStorage("wishlist", []);

  function addwishlistItem(item) {
    const index = wishlist.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setwishlist([...wishlist, { ...item, count: 1 }]);
    }
  }
  function removeItemwishlist(item) {
    setwishlist(wishlist.filter((x) => x.id !== item.id));
  }

  function iswishlist(item) {
    return wishlist.findIndex((x) => x.id === item.id) === -1 ? false : true;
  }

 
  return (
    <div>
      <WishListContext.Provider
        value={{ wishlist,removeItemwishlist ,addwishlistItem, iswishlist}}
      >
        {children}
      </WishListContext.Provider>
    </div>
  );
};

export default WishListProvider;
