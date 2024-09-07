import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { BasketContext } from "../../context/BasketProvider";
import { WishListContext } from "../../context/WishlistProvider";

const Home = () => {
  const [product, setProduct] = useState([]);
  const { addBasketItem, isBasket } = useContext(BasketContext);
  const { wishlist, removeItemwishlist, addwishlistItem, iswishlist } =
    useContext(WishListContext);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="items-card">
      {product &&
        product.map((item) => (
          <div key={item.id} className="card">
            <div>{item.name}</div>
            <div>{item.unitPrice}</div>
            <button onClick={() => addBasketItem(item)}>
              {isBasket(item) ? (
                <i className="fa-solid fa-trash"></i>
              ) : (
                <i class="fa-solid fa-basket-shopping"></i>
              )}
            </button>
            <button onClick={() => addwishlistItem(item)}>
              {iswishlist(item) ? (
                   <i class="fa-solid fa-heart"></i>
             
              ) : (
                <i className="fa-solid fa-trash"></i>
              )}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
