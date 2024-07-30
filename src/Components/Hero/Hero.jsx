import React from "react";
import "./Hero.css";
import shoes from "../Assets/shoes.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals <br></br>Only</h2>
        <p>Collections  for everyone</p>
       
        <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      </div>

     <div className="hero-right">
        <img src={shoes} alt="" />
      </div>
    </div>
  );
};

export default Hero;
