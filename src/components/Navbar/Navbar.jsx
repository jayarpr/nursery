import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import NavItem from '../NavItem'
import { Link } from '@reach/router'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = (props) => {

  const [openPlants, setOpenPlants] = useState(false);
  const isPlantsSubMenuOpen = openPlants ? styles.open : styles.closed;

  const [openPots, setOpenPots] = useState(false);
  const isPotsSubMenuOpen = openPots ? styles.open : styles.closed;

  return (
    <>
      <nav>
          <div className={styles.nav_desktop}> 
            <Link to="/">
              <div onClick={()=>props.setSubType("")} onMouseOver={()=>{setOpenPots(false);setOpenPlants(!openPlants)}} className={styles.nav_menu}>    
                <label> Plants </label>        
                <div className={styles.icons}><RiArrowDropDownLine/></div>            
              </div>
            
              <div className={isPlantsSubMenuOpen}>
                <NavItem type="small" setSubType={props.setSubType} item="Small Indoor plants"/>
                <NavItem type="tall" setSubType={props.setSubType} item="Tall Indoor plants"/>
              </div>
            </Link>
          </div>
          <div className={styles.nav_desktop}> 
            <Link to="pots">
              <div onClick={()=>props.setSubType("")} onMouseOver={()=> {setOpenPlants(false);setOpenPots(!openPots)}} className={styles.nav_menu}>
                <div>Pots</div>         
                <div className={styles.icons}><RiArrowDropDownLine/></div>
              </div>
            {/* </Link> */}
              <div className={isPotsSubMenuOpen}>
            {/* <Link to="pots"> */}
              <NavItem type="indoor" setSubType={props.setSubType} item="Indoor Pots"/>
              <NavItem type="outdoor" setSubType={props.setSubType} item="Outdoor Pots"/>
              </div>
            </Link>
          </div>

          <div className={styles.nav_desktop}> 
            <Link to="contactus">Contact Us </Link>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
