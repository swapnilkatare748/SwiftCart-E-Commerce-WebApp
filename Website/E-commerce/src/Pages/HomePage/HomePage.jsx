import React from 'react'
import styles from "./HomePage.module.css";
import HeroHome from '../../Components/HomeComponents/HeroHome/HeroHome';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <HeroHome/>
      <h1> hello i am from home page </h1>
    </div>
  )
}

export default HomePage
