import React from "react";
import styles from "./PlantList.module.scss";
import Plant from "../Plant"


const PlantList = (props) => {
  const {addToCart, subType, plants} = props;
  const plantList = subType ? plants.filter(plant => plant.type.includes(subType)) : plants;
  return (
    <>
      <section className={styles.plants}>
      {
        plantList.map(plant => <Plant addToCart={addToCart} key={plant.id} plant={plant}/>)
      }
      </section>
    </>
  );
};

export default PlantList;
