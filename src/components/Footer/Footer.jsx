import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
    <footer>
      <section class="container">            
        <div class="container__line"></div>
      </section>
      <section class="footer">
        <div>
            <img class="footer__image" src="../../assets/footer-img.png"/>
        </div>
        <div class="footer__topics">
          <div>
              <div class="footer__info">
                  <label>Contact Us</label>
                  <div class="footer__mobile"> <img src="../../assets/expand_more-24px.svg"/></div>
              </div>                    
              <div class="footer--sub"> Tel: 0800 37 37 37 </div>
              <div class="footer--sub">  Enquiry </div>
          </div>

          <div>
              <div class="footer__info">
                  <label>Information</label>
                  <div class="footer__mobile"> <img src="../../assets/expand_more-24px.svg"/></div>
              </div>                    
              <div class="footer--sub">  About Us </div>
              <div class="footer--sub"> Terms & conditions </div>
          </div>

          <div>
            <div class="footer__info">
                <label>#MakeItGreener</label>
                <div class="footer__mobile"> <img src="../../assets/expand_more-24px.svg"/></div>
            </div>                    
            <div class="footer--sub footer__social-icons">
                <img src="../../assets/iconfinder_Rounded_Facebook_svg_5282541.png" alt="Follow us on Facebook"/>
                <img src="../../assets/iconfinder_Rounded_Instagram_svg_5282544.png" alt="Follow us on Instagram"/>
                <img src="../../assets/iconfinder_Rounded_Messenger3_svg_5282546.png" alt="Message us directly"/>
                <img src="../../assets/iconfinder_Rounded_Twitter5_svg_5282551.png" alt="Follow us on Twitter"/>
            </div>
          </div> 
        </div>    
      </section>
    </footer>
    </>
  );
};

export default Footer;
