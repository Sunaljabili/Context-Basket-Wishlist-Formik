import { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const total = basket.reduce((prev,next)=>prev+ (next.count *next.unitPrice),0)
  function addBasketItem(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    }else{
        removeItemBasket(item);
    }
  }

  function removeItemBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }

  function isBasket(item) {
    return basket.findIndex((x) => x.id === item.id) === -1 ? false : true;
  }

  function increaseBasketItem(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket]);
  }
  function decreaseBasketItem(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count == 1) {
      return;
    }
    basket[index].count--;
    setBasket([...basket]);
  }
  return (
    <div>
      <BasketContext.Provider
        value={{ basket, addBasketItem, removeItemBasket,increaseBasketItem ,decreaseBasketItem,isBasket ,total}}
      >
        {children}
      </BasketContext.Provider>
    </div>
  );
};

export default BasketProvider;
