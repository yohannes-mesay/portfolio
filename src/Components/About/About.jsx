import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a creative Frontend Developer with a passion for building
              user-friendly and responsive web applications. I have a strong
              understanding of HTML, CSS, and JavaScript, and I am proficient in
              using popular frontend frameworks like React. I am constantly
              learning new technologies to stay up-to-date with the latest
              industry trends.
            </p>
            <p>
              In addition to my technical skills, I bring a collaborative and
              detail-oriented approach to my work. I enjoy problem-solving and
              finding elegant solutions to complex challenges. With a keen eye
              for design and usability, I strive to create visually appealing
              interfaces that enhance the user experience
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
