import React from 'react'
import Banner from '../../components/Banner';
import PlantList from '../../components/PlantList'
import plants from "../../data/plants"

const PlantCollection = (props) => {

    const increaseQuantity = (plant) => {
        plant.quantity += 1;
    }

    return (
        <div>
            <Banner src="../../assets/top-view-monstera-other-leaves-with-copy-space.jpg"/>
            <PlantList addToCart={props.addToCart} subType={props.subType} increaseQuantity={increaseQuantity} plants={plants}/>
        </div>
    )
}

export default PlantCollection
