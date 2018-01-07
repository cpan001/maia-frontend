import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div className="home-footer">
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/privacy">Privacy</NavLink>
      <NavLink to="/terms">Terms of Service</NavLink>
    </div>
  );
}

export default Footer;
