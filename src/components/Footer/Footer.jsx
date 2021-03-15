import React from "react";
import styles from "./Footer.module.scss";
import appstyles from './../../App.module.scss';
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer>
      <section className={appstyles.container}>            
        <div className={appstyles.container__line}></div>
      </section>
      <section className={styles.footer}>
        <div>
            <img className={styles.footer__image} src="../../assets/footer-img.png"/>
        </div>
        <div className={styles.footer__topics}>
          <div>
            <div className={styles.footer__info}>
                <label>Contact Us</label>
            </div>                    
            <div className={styles.footer__sub}> Tel: 0800 37 37 37 </div>
            <div className={styles.footer__sub}>  Enquiry </div>
          </div>
          <div>
            <div className={styles.footer__info}>
                <label>Information</label>
            </div>                    
            <div className={styles.footer__sub}>  About Us </div>
            <div className={styles.footer__sub}> Terms & conditions </div>
          </div>
          <div>
            <div className={styles.footer__info}>
                <label>#MakeItGreener</label>
            </div>                    
            <div className={styles.footer__social_icons}>
              <FaFacebookSquare/>
              <FaTwitterSquare/>
              <FaInstagramSquare/>
            </div>
          </div> 
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;
