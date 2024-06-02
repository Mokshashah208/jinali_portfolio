import React from "react";
import "./IntroSection.css";
import upArrow from "../../assets/Line 1.svg";
import curveArrow from "../../assets/Group 1.svg";
import emp_logo from "../../assets/empclaims_logo.png";
import octet_logo from "../../assets/octet_design_studio_logo.png";
import xp_logo from "../../assets/imaginxp logo.png";
import star from "../../assets/start.png";
const IntroSection = () => {
  const introHeadering = {
    title: "Greetings, I'm Jinali, a Creative Enthusiast",
    content:
      "with a honed knack for curating exceptional product experiences. Eagerly anticipating fresh prospects, I am poised to \
        embrace forthcoming challenges and opportunities within the industry!",
  };
  const experiences = {
    first: {
      title: "UX Jump starter,",
      year: "May, 2021",
      img: xp_logo,
      info: "My venture commenced with a brief course aimed at mastering the fundamentals.",
    },
    secound: {
      title: "UX Designer & Lead",
      year: "Sept 2021 - May 2023",
      img: octet_logo,
      info: "Octet Design Studio became the catalyst for my journey, affording me the chance to embark on this path.",
      info1:
        "In a span of nearly 2 years there, I swiftly ascended to a leadership role, leaving substantial footprints along the way.",
    },
    third: {
      title: "Lead UX Designer",
      year: "June 2023",
      img: emp_logo,
      info: "At present, armed with invaluable insights from the previous experiences, I spearhead a team dedicated to revolutionizing work methods at",
    },
  };
  return (
    <div className="info-container">
      <div className="intro-headering">
        <h2>{introHeadering.title}</h2>
        <p className="intro-content">{introHeadering.content}</p>
      </div>
      <div className="experiences-container">
        <div className="ex-container">
          <div className="title-container">
            <img src={experiences.third.img}  width="20px" height="20px"/>
            <h6 className="title">{experiences.third.title}</h6>
            <p className="year">{experiences.third.year}</p>
          </div>
          <p>
            {experiences.third.info}{" "}
            <b>EMP Claims.</b>
          </p>
        </div>
        <div className="secound-container">
          <div className="arrow-container">
            <img src={upArrow} className="Arrow" />
            <div className="d-flex">
              <div className="curveArrow-container">
                <img src={curveArrow} className="Arrow" />
              </div>
              <div className="ex-container1">
                <div className="title-container">
                  <img src={experiences.secound.img} width="20px" height="20px"/>
                  <h6 className="title">{experiences.secound.title}</h6>
                  <p className="year">{experiences.secound.year}</p>
                </div>
                <p>{experiences.secound.info}</p>
                <p>
                  In a span of nearly 2 years there, I swiftly ascended to a{" "}
                  <b>leadership role</b>, leaving substantial footprints along
                  the way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="last-container">
          <div className="d-flex" style={{ paddingTop: "15px", gap: "10px" }}>
            <img src={star} height={"30px"} width={"30px"} />
            <p className="my-flex">My Flex..</p>
          </div>
          <div className="arrow1">
            <img src={upArrow} className="Arrow" />
            <div className="ex-container20">
              <div className="title-container">
                <img src={experiences.first.img}  width="20px" height="20px"/>
                <h6>{experiences.first.title}</h6>
                <p>{experiences.first.year}</p>
              </div>
              <p>{experiences.first.info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
