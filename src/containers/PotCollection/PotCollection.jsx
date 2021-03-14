import React from 'react'
import Banner from '../../components/Banner';
import PotList from '../../components/PotList'
import pots from "../../data/pots"
import styles from './../../App.module.scss';

const PotCollection = (props) => {

    return (
        <div>
            <Banner src="../../assets/top-view-monstera-other-leaves-with-copy-space.jpg"/>
            <section className={styles.container}>
                <p>Decorate your pots with trending plants</p>
                <div className={styles.container__line}></div>
            </section>
            <PotList addToCart={props.addToCart} subType={props.subType} pots={pots}/>
        </div>
    )
}

export default PotCollection
