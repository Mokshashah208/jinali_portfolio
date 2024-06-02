import React from "react";
import "./Footer.css";
import arrow from "../../assets/Layer_1.png";
import icon1 from "../../assets/Download Resume (1).png";
import icon2 from "../../assets/Download Resume (2).png";
import icon3 from "../../assets/Download Resume (3).png";
import icon4 from "../../assets/Download Resume (4).png";
import samplePDF from "../../assets/Jinali Resume Apr 2024.pdf";
const Footer = () => {
  const info = [
    { title: "+91 8401828920", icon: icon1 },
    { title: "Jinalishah0120@gmail.com", icon: icon2 },
    { title: "Vasna, Ahmedabad, 380007", icon: icon3 },
    { title: "LinkedIn", icon: icon4 },
  ];
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };
  return (
    <div className="footer-container">
      <div className="circle-container">
        <p className="main-text">Jinali.UX</p>
        <a
          className="tooltip1 circle"
          href={samplePDF}
          download="jinal_resume.pdf"
        >
          <img src={arrow} />
          <span class="tooltiptext">Download Resume</span>
        </a>
      </div>
      <div className="infomation-container">
        {info.map((item) => {
          return (
            <div className="info-data">
              <img src={item.icon} className="image-size" />
              {item.title == "LinkedIn" ? (
                <a
                  className="titek"
                  href="https://www.linkedin.com/in/jinali-shah-31a559188"
                >
                  {item.title}
                </a>
              ) : (
                <p className="titek" onClick={()=>copyToClipboard(item.title)}>{item.title}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
