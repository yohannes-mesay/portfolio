import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk about everything!</h1>
          <p>
            I'm currently avaialbe to take on new projects, so feel free to send
            me a message about anything that you want me to work on.You can
            contact anyting{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>johnnymesay@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0922699355</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Addis ababa,Ethiopia</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea rows="8" placeholder="Enter your name" name="message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;