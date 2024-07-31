import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>FLIP FLOP</p>
      </div>
      <ul className="footer-links">
        <li>Home</li>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-whatsapp"></i>
      <i class="fa-brands fa-facebook"></i>
      </div>
      <hr/>
      <div className="footer-copyright">
      <p>FlipFlop Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
