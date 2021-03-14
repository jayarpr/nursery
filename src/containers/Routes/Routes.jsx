import React from 'react'
import { Router } from "@reach/router"
import Cart from '../../components/Cart'
import PlantCollection from '../PlantCollection'
import PotCollection from '../PotCollection'
import PlantDetails from '../../components/PlantDetails';

const Routes = (props) => {
    return (
        <div>
            <Router>
                <Cart removeFromCart={props.removeFromCart} path="viewcart"/>
                <PlantDetails path="plantdetails"/>
                <PlantCollection addToCart={props.addToCart} subType={props.subType} path="/"/>
                <PotCollection addToCart={props.addToCart} subType={props.subType} path="pots"/>
            </Router>
        </div>
    )
}

export default Routes
