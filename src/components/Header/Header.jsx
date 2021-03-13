import React from "react";
import { Link } from '@reach/router';
import styles from "./Header.module.scss";
import { TiShoppingCart } from 'react-icons/ti';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';

const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.mediaicons}>
          <FaFacebookSquare/>
          <FaTwitterSquare/>
          <FaInstagramSquare/>
          <MdEmail/>
        </div>

        <div className={styles.websitename}>WOODCOTE NURSERY</div>

        <div className={styles.topright}>
          <div className={styles.login}>
            <IoPersonOutline/>
            <span>LOGIN</span>
          </div>
          <div className={styles.cart}>
            <Link to="viewcart"><TiShoppingCart/></Link>
          </div>
          <div>
            {props.cartCounter > 0 ? props.cartCounter : ""}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
