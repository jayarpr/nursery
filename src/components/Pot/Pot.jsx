import React from "react";
import styles from "./Pot.module.scss";

const Pot = ({pot}) => {
  const {
    id,
    description,
    image,
    price,
    color
  } = pot;

  return (
    <>
      <div id={id} className={styles.pot}>
        <div> <img src={image}/> </div>
        <div className={styles['pot--desc']}> {description} </div>
        <div className={styles['pot--price']}> {price} </div>
      </div>
      {/* <p>Pot works</p> */}
    </>
  );
};

export default Pot;
