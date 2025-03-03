import React from "react";
import "./view.css";
import arrow from "../../assets/img/arrow_icon.png";

const View = ({ onClick, text }) => {
  return (
    <div className="content-view-more" onClick={onClick}>
      <a className="content-view-more-link">
        {text}
        <img src={arrow} alt="arrow icon" />
      </a>
    </div>
  );
};

export default View;
