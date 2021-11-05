import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          Max Kremlev <i className='fas fa-rocket'></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
