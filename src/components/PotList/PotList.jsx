import React from "react";
import styles from "./PotList.module.scss";
import Pot from "../Pot"

const PotList = (props) => {
  const {addToCart, subType, pots} = props;
  const potList = subType ? pots.filter(pot => pot.type.includes(subType)) : pots;
 
  return (
    <>
      {/* <p>PotList works</p> */}
      <section className={styles.pots}>
        {potList.map(pot => <Pot addToCart={addToCart} key={pot.id} pot={pot}/>)}
      </section>
    </>
  );
};

export default PotList;
