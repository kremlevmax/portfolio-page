import React, { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => setClicked(!clicked);
  return (
    <>
      <nav className='navbar'>
        <div className='logo-container'>
          Max Kremlev <i className='fas fa-rocket'></i>
        </div>
        <div className='menu-icon' onClick={onClickHandler}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />{" "}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
