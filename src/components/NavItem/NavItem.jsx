import React from "react";
import styles from "./NavItem.module.scss";

const NavItem = (props) => {
  const {
    type,
    setSubType,
    item
  } = props;
  
  return (
    <>
      <div className={styles.NavItem}> 
       <div onClick={()=>setSubType(type)} className={styles.menuItem}>{item}</div> 
      </div>
    </>
  );
};

export default NavItem;
