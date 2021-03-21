import React from "react";
// import axios from "axios";
// import { getPlantDetails } from "../../services/plants.service";
// import styles from "./PlantDetails.module.scss";


const PlantDetails = () => {
  
  const fetch = require('node-fetch');
  let data = "";

  const fetchData = async(plantName) => {
    const response = await fetch('https://trefle.io/api/v1/plants?token=t9Y-9aYgpPD0lw4XplEe018SkLf86F7kr-fqBz7lD7Q&q=coconut', { mode: 'no-cors'});
  
    // const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    const json = await response.json();
    // data = json.data[0].quoteText; console.log(data);
    console.log(json);
  }
  
  fetchData('Nephrolepis')
  // getPlantDetails('Nephrolepis');
  return (
    <>
      <p>{data}</p>
    </>
  );
};

export default PlantDetails;
