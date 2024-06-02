import React, { useState } from "react";
import quote from "../../assets/quote.png";
import LeftArrow from "../../assets/blurLeftArrow.png";
import BlurRightArrow from "../../assets/RightArrow.png";
import BlurLeftArrow from "../../assets/LeftArrow.png";
import RightArrow from "../../assets/blurRightArrow.png";
import "./Testimonials.css";

const Testimonials = () => {
  const testimoninals = [
    {
      first:
        "“Firstly, I want to mention that you are really kind and a very genuine person. I loved working with you and really like to thank you for your advice on certain things outside work and the way you encouraged me.",
      secound:
        "It never felt as if you were that strict serious senior rather you've always been like a friend and a mentor to me. As I have said earlier, though there are people to guide me, working here won't be the same for me without you. But I look forward to be in touch with you and would seek your views and advice on areas where I would need guidance.",
      third:
        "Thankyou so much, I'm fortunate to start my career with such positive and motivating colleagues.Seniors ho to aap jaise warna na ho.. “",
      person: "Kavya Panchal",
      designation: "UI UX Designer",
      background: "#FFF0F3",
    },
    {
      first:
        "First of all I wish you all the best of best with your future endeavours. You were a great asset here and your absence will definitely be noticed. I really liked your energy and the motivation you gave, you were very proactive about your actions.",
      secound:
        "I learned a-lot of things very well from the brief time I got trained from you. You have a great way of explaining and reasoning things, when I approach for reviews you critique in such ways that I am still motivated or perhaps even more. I could only wish you had more time here, but it's all for the best. I wouldn't have any negative feedbacks even if I looked for one, you're a 10!",
      third:
        "Again I wish you all the best, hoping to see you pursuing greater things in future.",
      person: "Aadil Sajid",
      designation: "UI UX Designer",
      background: "#DCDCFF",
    },
    {
      first:
        "Yes, I am very sad that you are leaving and It's an actual loss to the company but people say that life should go on with climbing the ladder so you deserve the best of what you are striving for. ",
      secound:
        "Also, You are a genuine and kind person, I have also felt this. You always help your team in need. This quality is rare in this cooperate world. I am sure you will be the same where ever you and pursue further. I pray that you get the best and wishing you the best success in your next endeavors. ",
      third:
        "The only feedback i would say keep learning (I know you do that already). The world has so much competition.The last i would want to say is the team will definitely miss your presence. And people miss those who are the best!“",
      person: "Ashfaq Husain",
      designation: "Project Manager",
      background: "#FCF2D4",
    },
    {
      first:
        "Hey Jinali It was a great pleasure working with you.. I have learned so much while working with you and I admire your dedication and humbleness...Will miss working with you...",
      person: "Sneha Mehta",
      designation: "UI UX Designer",
      background: "#D0EBFF",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 0) {
      newIndex = testimoninals.length - 1;
    } else if (newIndex >= testimoninals.length) {
      newIndex = 0;
    }
    setSlideIndex(newIndex);
  };
  return (
    <div className="test-container">
      <h3
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        Testimonials
      </h3>
      <div className="slideshow-container">
        <a className="prev" onClick={() => plusSlides(-1)}>
          <img src={slideIndex == 0 ? BlurLeftArrow : LeftArrow} />
        </a>
        {testimoninals.map((item, index) => (
          <>
            {index === slideIndex && (
              <div
              className="inside-silider-container"
                style={{
                  background: item.background,
                 
                }}
              >
                <div
                  key={index}
                  className="inside-silider"
                >
                  <img
                    src={quote}
                    style={{ width: "auto", verticalAlign: "middle" }}
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="text" style={{ paddingTop: "20px" }}>
                    {item.first}
                  </div>
                  {item.secound && <div className="text">{item.secound}</div>}
                  {item.third && <div className="text">{item.third}</div>}
                  <div className="d-flex">
                    <h4 className="text-h4">{item.person}</h4>
                    <p
                      style={{ paddingTop: "5px", paddingLeft: "10px" }}
                      className="text"
                    >
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
        <a className="next" onClick={() => plusSlides(1)}>
          <img
            src={
              slideIndex == testimoninals.length - 1
                ? RightArrow
                : BlurRightArrow
            }
          />
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
