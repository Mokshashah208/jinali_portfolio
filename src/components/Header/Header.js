import React from "react";
import arrow from "../../assets/Layer_1.png";
import "./Header.css";
import samplePDF from "../../assets/Jinali Resume Apr 2024.pdf";
export const Header = () => {
  return (
    <div className="header-container">
      <span>Jinali.UX</span>
      <a
        href={samplePDF}
        download="jinal_resume.pdf"
        className="tooltip2 circle"
      >
        <img src={arrow} style={{paddingTop:"10px"}}/>
        <span class="tooltiptext">Download Resume</span>
      </a>
    </div>
  );
};
