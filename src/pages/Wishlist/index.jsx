import React, { useContext } from 'react'
import { WishListContext } from '../../context/WishlistProvider'

const Wishlist = () => {
    const {wishlist,removeItemwishlist ,addwishlistItem, iswishlist} = useContext(WishListContext)
  return (
    <div>
     <div className="items-card">
        {wishlist &&
          wishlist.map((item) => (
            <div key={item.id} className="card">
              <div>{item.name}</div>
              <div>{item.unitPrice}</div>
              <button onClick={()=>removeItemwishlist(item)}>Remove Wishlist </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Wishlist
