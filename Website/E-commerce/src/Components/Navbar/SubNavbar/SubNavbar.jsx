import React from "react";
import styles from "./SubNavbar.module.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 }from "../../../assets/Icons.js";


function SubNavbar() {
  return (
    <div className={styles.SubNavbar}>
       <div className={styles.primaryNavSection}>
           <ul className="flexCenter">
         
            <li className={styles.navbarLink}><HiOutlineMenuAlt1/></li>
            <li className={styles.navbarLink}><Link to="">Fresh</Link></li>
            <li className={styles.navbarLink}><Link to="">Best Scllers</Link></li>
            <li className={styles.navbarLink}><Link to="">Sell</Link></li>
            <li className={styles.navbarLink}><Link to="">Prime</Link></li>
            <li className={styles.navbarLink}><Link to="">NewReleases</Link></li>
           </ul>
       </div>
       <div className={styles.OfferSection}>
            best  of 60% 
       </div>
    </div>
  );
}

export default SubNavbar;
