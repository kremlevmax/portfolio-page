import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const onBurgerClickHandler = () => setClicked(!clicked);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Max Kremlev <i className='fas fa-rocket'></i>
          </Link>
          <div className='menu-icon' onClick={onBurgerClickHandler}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"} />{" "}
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
