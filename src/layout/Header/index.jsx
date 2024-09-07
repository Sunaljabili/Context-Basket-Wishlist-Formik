import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Header = () => {
  return (
   <nav>
    <ul>
       <Link to={"/"}><li>Home</li></Link>
       <Link to={"/basket"}><li>Basket</li></Link>
       <Link to={"/wishlist"}><li>Wishlist</li></Link>
    </ul>
   </nav>
  )
}

export default Header
