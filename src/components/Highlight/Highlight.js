import React, { useState } from "react";
import "./Highlight.css";
import image3 from "../../assets/image 2.png";
import image1 from "../../assets/Group 5.png";
import image2 from "../../assets/Talback home 1.png";
import background1 from "../../assets/Blue Bg.png";
import background2 from "../../assets/Yellow Bg.png";
import background3 from "../../assets/Pink Bg.png";

const Highlight = () => {
  const HighlightArray = [
    {
      title: "Inspection Management System For Solar Farms",
      desc: "This comprehensive digital solution designed to streamline and enhance the inspection processes within solar energy facilities. This system is meticulously engineered to ensure the optimal functioning, maintenance, and performance of solar farms.",
      imgae: image1,
      background: background1,
      backgroundColor: "#90B5DE",
    },
    {
      title: "Online Interview Preparation Platform",
      desc: "An AI enabled automated interview platform where candidates can improve their interview skills by practicing one-on-one mock interviews offered by industry professionals. This platform simulates a real-time interview experience to a candidate. ",
      imgae: image2,
      background: background2,
      backgroundColor: "#D0BE86",
    },
    {
      title: "Blood Bank Management System",
      desc: "A system that streamlines the management of blood inventory, donor information, and blood distribution processes within a blood bank or medical facility. It digitizes and automates tasks such as donor registration, blood testing, inventory tracking, and blood request processing.",
      imgae: image3,
      background: background3,
      backgroundColor: "#EFC7EF",
    },
  ];
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="highlight-container">
      <div className="info-container">
        <div className="intro-headering">
          <h2>Highlights of Exceptional Projects</h2>
          <p className="intro-content">
            Highlighting a Selection of Exceptional Projects from My Journey.
            These carefully chosen undertakings not only showcase my skills and
            expertise but also embody the passion and commitment I bring to
            every challenge I undertake.
          </p>
        </div>
        {HighlightArray.map((item, index) => {
          return (
            <div
              className="data-container"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  isHovered == index
                    ? `inset 4px 4px 4px 0px ${item.backgroundColor}`
                    : "none",
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="highlight-headering">
                <p className="highlight-title">{item.title}</p>
                <p className="highlight-p">{item.desc}</p>
              </div>
              <div className="image-container">
                <img src={item.imgae} className="high-img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlight;
