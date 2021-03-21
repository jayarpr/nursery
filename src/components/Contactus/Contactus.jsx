import React from "react";
import styles from "./Contactus.module.scss";
import Banner from "../Banner";
import  { useForm } from "react-hook-form";

const Contactus = () => {

  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data,e) =>  {
      console.log(data);
      e.target.reset(); //clear the form after submit
  }
  const sleep = ms => new Promise(res => setTimeout(res, ms));

  const validateEmail = async (value) => {
      await sleep(1000);
      if  (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value))
        return true;
    return false;
  };

//   console.log(watch("contactName")); // watch input value by passing the name of it

  return (
    <>
    
    <Banner src="../../assets/banner-1082646_640.jpg"/>
   
    <form onSubmit={handleSubmit(onSubmit)}>
        <section className={styles.form_enquiry}>
                <div className={styles.form_enquiry__text__block}>
                    <h4>How can we help you?</h4>
                    <p> Please send us a message using the form below. If you have an order number please include it to help us with your query.</p>
                </div>
                <div className={styles.form_enquiry__text__block}>
                    <label>Name:<span className={styles.red}>*</span></label>
                    <input id="name" name="contactName" type="text" placeholder="Name" ref={register} required/>
                </div>

                <div className={styles.form_enquiry__text__block}>
                    <label>Email:<span className={styles.red}>*</span></label>
                    <input id="email" name="contactEmail" type="text" placeholder="Email" ref={register ({validate: validateEmail})} required />
                    {errors.contactEmail?.type === "required" && "Please enter your email address"}
                    {errors.contactEmail?.type === "validate" && "Please enter valid email address"}
                </div>

                <div className={styles.form_enquiry__text__block}>
                    <label>Message:<span className={styles.red}>*</span></label>
                    <textarea id="message" name="contactMessage" placeholder="Type in your message" ref={register({required: true, maxLength: 10})}></textarea>
                    {errors.contactMessage?.type === "required" && "Please enter your message"}
                    {errors.contactMessage?.type === "maxLength" && "Your input exceed maxLength"}
                </div>

                <div className={styles.form_enquiry__text__block}>
                    <label>Order Number:</label>
                    <input id="order" name="contactOrderNo" type="text" ref={register} placeholder="Order No. from your order confirmation email"/>
                </div>

                <div className={styles.buttons}>
                    <div className={styles.form_enquiry__text__block, styles.contact_button}>
                        <button>Send</button>
                    </div>
                    <div className={styles.form_enquiry__text__block, styles.contact_button}>
                        <button onClick={() => reset()} >Reset</button>
                    </div>
                </div>
                
            </section>
        </form>
    </>
  );
};

export default Contactus;
