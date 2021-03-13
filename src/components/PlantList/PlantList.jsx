import React from "react";
import styles from "./PlantList.module.scss";
import Plant from "../Plant"


const PlantList = (props) => {
  const {increaseQuantity, addToCart, subType, plants} = props;
  const plantList = subType ? plants.filter(plant => plant.type.includes(subType)) : plants;
  return (
    <>
      <section className={styles.plants}>
      {/* <p>PlantList works</p> */}
        {
          
          plantList.map(plant => <Plant increaseQuantity={increaseQuantity} addToCart={addToCart} key={plant.id} plant={plant}/>)
        }
      </section>
    </>
  );
};

export default PlantList;
