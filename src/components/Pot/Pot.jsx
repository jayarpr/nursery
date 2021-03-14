import React from "react";
import styles from "./Pot.module.scss";

const Pot = ({pot, addToCart}) => {
  const {
    id,
    description,
    image,
    price
  } = pot;

  return (
    <>
      <div id={id} className={styles.pot}>
        <div> <img alt="" src={image}/> </div>
        <div className={styles['pot--desc']}> {description} </div>
        <div className={styles['pot--price']}> 
          {price} 
          <button onClick={() => addToCart(pot)} title="Add to Cart">Add to Cart</button>
        </div>
      </div>
      {/* <p>Pot works</p> */}
    </>
  );
};

export default Pot;
