import React, { useState } from "react";
import styles from "./Cart.module.scss";
import CartItem from '../CartItem'
import plants from '../../data/plants';
import pots from '../../data/pots';
import Banner from "../Banner";

const Cart = (props) => {

  const plantsInCart = plants.filter(plant => plant.quantity > 0);
  const potsInCart = pots.filter(pot => pot.quantity > 0);
  const itemsInCart = plantsInCart.concat(potsInCart);
  
  const [cartItems , updateCartItems] = useState(itemsInCart);

  const getContentJSX = () => {
    const content =  cartItems.length > 0 ? 
                     cartItems.map(item => <CartItem key={item.id} item={item} deleteItem={removeItem}/>)
                     : "No items added to the cart";
    return content;
  }
  const getTotalPrice = () => {
    const total = cartItems.length > 0 ? 
                  cartItems.reduce((accumulator, currentValue) => accumulator+ parseFloat(currentValue.price * currentValue.quantity), 0)
                 : 0.00;
    return total;
  }

  const removeItem = (item) => {
    item.quantity = 0;
    updateCartItems(cartItems.filter(item => item.quantity > 0));
  };

  return (
    <>
    <section>
      <Banner src="../../assets/banner-1082646_640.jpg"/>
      <div className={styles.cart}>
        <div>Item</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div> Remove </div>
      </div>
      <div style={{textAlign:"center"}}>{getContentJSX()}</div>
      <p style={{textAlign:"center"}}>Total Price: {getTotalPrice()}</p>
    </section>
    </>
  );
}; 

export default Cart;
