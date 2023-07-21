import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";
import Contactimg from "../../public/avatar-network.svg"
export const metadata = {
  title: "Blogerium contact us form ",
  description: "Contact us form for connect with us",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Contactimg}
            alt="contact  image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Enter Your Name" className={styles.input} />
          <input type="text" placeholder="Enter Your Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Type Your message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;