import React from "react";
import "./Navbar/Navbar.css";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About me</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
