import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <NavLink className="navbar" to="/">
      <img
        className="imageLogo"
        src="http://res.cloudinary.com/dzmtr75qy/image/upload/v1515334398/maiaCroppedLogo_batkx0.png"
        alt="Maia Logo"
      />
    </NavLink>
  );
}

export default Navbar;
