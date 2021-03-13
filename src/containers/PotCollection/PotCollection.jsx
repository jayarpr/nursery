import React from 'react'
import Banner from '../../components/Banner';
import PotList from '../../components/PotList'
import pots from "../../data/pots"

const PotCollection = (props) => {
    return (
        <div>
            <Banner src="../../assets/top-view-monstera-other-leaves-with-copy-space.jpg"/>
            <PotList addtoCart={props.addToCart} subType={props.subType} pots={pots}/>
        </div>
    )
}

export default PotCollection
