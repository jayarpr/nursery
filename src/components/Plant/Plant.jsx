import React from "react";
import { Link } from "@reach/router";
import styles from "./Plant.module.scss";

const Plant = ({plant, addToCart}) => {
  const {
    id,
    description,
    image,
    price    
  } = plant;

  return (
    <>
      <div id={id} className={styles.plant}>
        <div> <Link to="plantdetails"><img alt="" src={image}/> </Link></div>
        <div className={styles['plant--desc']}> {description} </div>
        <div className={styles['plant--price']}>
          {price}
          <button onClick={() => addToCart(plant)} title="Add to Cart">Add to Cart</button>
        </div>
      </div>
      
    </>
  );
};

export default Plant;
