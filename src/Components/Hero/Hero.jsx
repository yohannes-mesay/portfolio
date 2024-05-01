import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Yohannes Mesay,</span> React developer based in Ethiopia
      </h1>
      <p>
        I am a React developer from Addis Ababa ,Ethiopia with 6+ months of
        experience
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#home">
          <div className="hero-connect">Connect with me </div>
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
