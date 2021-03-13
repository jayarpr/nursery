import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props) => {
  return (
    <>
       <section className={styles.banner}>
        {/* <img src="../../assets/beautiful-plant-pots_1800x 1.png"/> */}
        <img src={props.src}/>
      </section>
    </>
  );
};

export default Banner;
