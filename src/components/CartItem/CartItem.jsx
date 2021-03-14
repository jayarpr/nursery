import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  const {
    item,
    deleteItem
  } = props;
  return (
    <>
      <div className={styles.cartItem}>
        <div><img alt="" src={item.image}/></div>
        <div>{item.description} </div>
        <div>{item.quantity} </div>
        <div>{item.price} </div>
        <div><button onClick={()=>deleteItem(item)}> Remove </button> </div>
      </div>
    </>
  );
};

export default CartItem;
