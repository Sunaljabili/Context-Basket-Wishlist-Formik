import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketProvider";
import { WishListContext } from "../../context/WishlistProvider";

const Basket = () => {
  const {
    basket,
    addBasketItem,
    removeItemBasket,
    increaseBasketItem,
    decreaseBasketItem,
    isBasket,
    total,
  } = useContext(BasketContext);

  const{addwishlistItem} =useContext(WishListContext)
  return (
    <div>
      <h1>Basket Page</h1>
      <div className="items-card">
        {basket &&
          basket.map((item) => (
            <div key={item.id} className="card">
              <div>{item.name}</div>
              <div>{item.unitPrice}</div>
              <div>{item.count}</div>
              <button onClick={()=>increaseBasketItem(item)}>+ </button>
              <button onClick={()=>decreaseBasketItem(item)}>- </button>
              <button onClick={()=>removeItemBasket(item)}>X </button>

              <button onClick={()=>addwishlistItem(item)}>Add wishlist</button>
            </div>
          ))}
      </div>
      <h6>total: {total.toFixed(2) && total===0 ? "bASKET IS EMPTy" :total  } </h6>
    </div>
  );
};

export default Basket;
