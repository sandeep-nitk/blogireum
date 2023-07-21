"use client"
import React, { useContext } from 'react'
import styles from "./DarkModeToggle.module.css"
import Image from 'next/image'
import Light from "../../public/sun.png"
import Dark from "../../public/night-mode.png"
import { ThemeContext } from '../../context/ThemeContext'
const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><Image src={Light} width={20}/></div>
        <div className={styles.icon}><Image src={Dark} width={20}/></div>
        <div className={styles.ball} style={mode==='light' ? {left:"2px" } :{right:"2px"}}></div>
    </div>
  )
}

export default DarkModeToggle