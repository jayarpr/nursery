import React from "react";
import styles from "./Plant.module.scss";

const Plant = ({plant, addToCart, increaseQuantity}) => {
  const {
    id,
    description,
    image,
    price,
    quantity
  } = plant;

  const addPlant = () => {
    increaseQuantity(plant);
    addToCart();
  }
  return (
    <>
      <div id={id} className={styles.plant}>
        <div> <img src={image}/> </div>
        <div className={styles['plant--desc']}> {description} </div>
        <div className={styles['plant--price']}>
          {price}
          <button onClick={addPlant} title="Add to Cart">Add to Cart</button>
        </div>
        {/* <div className={styles['plant__button']}>
          <button title="Add to Cart">Add to Cart</button>
        </div> */}
      </div>
      
    </>
  );
};

export default Plant;
