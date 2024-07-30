import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu,setMenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Flip-Flops</p>
        <img src={logo} alt=""/>
      </div>
      <div className="nav-menu">
        <ul>
          <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration: 'none', color: 'white'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{textDecoration: 'none', color: 'white'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration: 'none',color: 'white'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
         <Link to='/login'><button>Login</button></Link> 
         <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}> <i class="fa-solid fa-cart-shopping"></i></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
}
