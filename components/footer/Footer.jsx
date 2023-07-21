import React from 'react'
import Image from 'next/image'
import facabook from "../../public/google.svg"
import styles from "./footer.module.css"
const Footer = () => {
  console.log("hello")
  return (
    <div className={styles.container}>
      <div>©2023 Blogireum. All rights reserved.</div>
      <div className={styles.social}>
        <Image src={facabook}  width={15} height={15} className={styles.icon} alt="facebook" />
        <Image src={facabook}  width={15} height={15} className={styles.icon} alt=" Facebook " />
        <Image src={facabook}  width={15} height={15} className={styles.icon} alt="Facebook " />
        <Image src={facabook}  width={15} height={15} className={styles.icon} alt=" Facebook" />
     
      </div>
    </div>
  )
}

export default Footer