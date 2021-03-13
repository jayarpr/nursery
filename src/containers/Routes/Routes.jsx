import React from 'react'
import { Router } from "@reach/router"
import Cart from '../../components/Cart'
import PlantCollection from '../PlantCollection'
import PotCollection from '../PotCollection'

const Routes = (props) => {
    return (
        <div>
            <Router>
                <Cart path="viewcart"/>
                <PlantCollection addToCart={props.addToCart} subType={props.subType} path="/"/>
                <PotCollection addToCart={props.addToCart} subType={props.subType} path="pots"/>
            </Router>
        </div>
    )
}

export default Routes