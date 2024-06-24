import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-inside" key={index}>
            <img
              src={work.w_img}
              alt={work.w_name}
              onClick={() => handleWorkClick(work.w_url)}
            />
            <h3>{work.w_name}</h3>
            <h4>{work.w_description}</h4>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/yohannes-mesay" target="_blank">
          Show More
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
