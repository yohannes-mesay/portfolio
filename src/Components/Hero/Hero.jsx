import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import resume_pdf from "../../assets/resume.pdf"; // Ensure this path is correct
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} className="profile" alt="" />
      <h1>
        <span>I'm Yohannes Mesay,</span> Web developer based in Ethiopia
      </h1>
      <p>
        I am a full-stack developer creating impactful web experiences through
        innovative design and seamless functionality
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <a href={resume_pdf} target="_blank" rel="noopener noreferrer" className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
