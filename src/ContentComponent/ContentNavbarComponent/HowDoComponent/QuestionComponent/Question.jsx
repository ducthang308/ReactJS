import React from "react";
import collapse from "../../../../assets/img/collapse.png";
import "./index.css";

const Question = ({ isActive }) => {
  return (
    <div
      className={`how-do-question ${isActive ? "how-do-question--active" : ""}`}
    >
      <img src={collapse} alt="" className="how-do-img" />
      <p className="how-do-text">Lorem ipsum dolor sit amet</p>
    </div>
  );
};

export default Question;
