import React from 'react'
import Banner from '../../components/Banner';
import PlantList from '../../components/PlantList'
import plants from "../../data/plants"
import styles from './../../App.module.scss';

const PlantCollection = (props) => {

    return (
        <div>
            <Banner src="../../assets/top-view-monstera-other-leaves-with-copy-space.jpg"/>
            <section className={styles.container}>
                <p>Trending Plants</p>
                <div className={styles.container__line}></div>
            </section>
            <PlantList addToCart={props.addToCart} subType={props.subType} plants={plants}/>
        </div>
    )
}

export default PlantCollection
