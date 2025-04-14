import { ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from 'react'
import CartItem from "../CartItem";

import styles from './cart.module.css'

const Cart = ({cartItems}) => {
const[showCart, setShowCart] = useState(false);
const[cartTotal, setCartTotal] = useState(0);

 const handleClick =() => {
  setShowCart(!showCart)
 }

 const calculateTotal = () => {
  let sum = 0;
  cartItems.forEach (item => sum+=item.price)
  setCartTotal(sum)
 }

 useEffect( () => {
  calculateTotal()
 },[cartItems])

  return (
    <>
    <ShoppingCart size={32} onClick={handleClick} />
    {showCart &&
    <div className={styles.cartContent}>
      {cartItems.length > 0
         ? <>{cartItems.map((item, index) => <CartItem key={index} product={item} /> )}  </>
        // ? <p>{cartItems.length}</p>
        : <p>Cart is empty</p>}
      <div>
        <p>Total: {cartTotal.toLocaleString("sv-SE", {styles:"currency", currency:"EUR"})}</p>
      </div>
    </div>
}
    </>
  )
}

export default Cart

