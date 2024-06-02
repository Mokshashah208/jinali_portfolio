import React, { useState } from "react";
import "./Challenges.css";
const Challenges = () => {
  const array = [
    {
      title: "B2B, SaaS, Enterprise",
      category: [
        "Personalized Product Experience Platform",
        "A Survey Management System",
        "Insurance Management System for US Healthcare Agencies",
        "Expense Management System for Employees",
        "An Invoice Management System for Enterprises",
        "A Blood Bank Management System",
        "Solar Plant Management System",
      ],
    },
    {
      title: "Healthcare",
      category: [
        "A Blood Bank Management System",
        "A Medical records directory for US Healthcare Agencies",
        "Health Record Directory for Pets",
      ],
    },
    {
      title: "EdTech",
      category: [
        "An Interview Preparation Platform for Students & Professionals",
      ],
    },
    {
      title: "Website & Mobile",
      category: [
        "Health Record Directory for Pets",
        "An Invoice Builder for Small Businesses",
        "A Website for Carbon emission tracking Platform",
      ],
    },
    "Healthcare",
    "EdTech",
    "Website & Mobile",
  ];
  const [selected, setSelected] = useState(array[0]);

  return (
    <div className="info-container">
      <div className="intro-headering">
        <h2>Embracing Diverse Challenges</h2>
        <p className="intro-content">
          With a rich portfolio spanning various industries, I have cultivated a
          versatile skill set and acquired extensive knowledge. This background
          has honed my ability to seamlessly adapt to new challenges.
        </p>
      </div>
      <div className="array-container">
        {array.map((item) => {
          return (
            <div
              className={
                selected.title == item.title ? "selected" : "not-selected"
              }
              onClick={() => {
                setSelected(item);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="category-container">
        <div className="category-item-container">
          {selected.category.map((item) => {
            return <span className="category-item">{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
