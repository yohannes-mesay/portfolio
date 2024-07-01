import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} className="about_profile" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a creative Full Stack Developer with a passion for building
              user-friendly and responsive web applications. I have a strong
              understanding of HTML, CSS, and JavaScript, and I am proficient in
              using popular frontend frameworks like React. I also leverage
              Backend as a Service (BaaS) platforms like Supabase to build
              secure, scalable, and efficient backends. I am constantly learning
              new technologies to stay up-to-date with the latest industry
              trends.
            </p>
            <p>
              In addition to my technical skills, I bring a collaborative and
              detail-oriented approach to my work. I enjoy problem-solving and
              finding elegant solutions to complex challenges. With a keen eye
              for design and usability, I strive to create visually appealing
              interfaces that enhance the user experience.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Material UI</p> <hr style={{ width: "57%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
