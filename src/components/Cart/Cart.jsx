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

  const removeItem = (item) => {
    item.quantity = 0;
    updateCartItems(cartItems.filter(item => item.quantity > 0));
  };


  // const [plantsInCart, updatePlantsInCart] = useState(plants.filter(plant => plant.quantity > 0))
  // const [potsInCart, updatePotsInCart] = useState(pots.filter(pot => pot.quantity > 0))

  // const removePlant = (plant) => {
  //   plant.quantity = 0;
  //   updatePlantsInCart(plants.filter(plant => plant.quantity > 0));
  // };

  // const removePot = (pot) => {
  //   pot.quantity = 0;
  //   updatePotsInCart(pots.filter(pot => pot.quantity > 0));
  // };

  return (
    <>
    <section>
      {/* { plantsInCart.map(plant => <CartItem item={plant} removeItem={removePlant}/>) }
      { potsInCart.map(pot => <CartItem item={pot} removeItem={removePot}/>)} */}
      <Banner src="../../assets/banner-1082646_640.jpg"/>
      <div className={styles.cart}>
        <div>Item</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div> Remove </div>
      </div>
      <div style={{textAlign:"center"}}>{getContentJSX()}</div>
      {/* { cartItems.map(item => <CartItem key={item.id} item={item} deleteItem={removeItem}/>)} */}
    </section>
    </>
  );
}; 

export default Cart;
