import React from "react";
import "./view.css";
import arrow from "../../assets/img/arrow_icon.png";

const View = () => {
  return (
    <div class="content-view-more">
      <a href="" class="content-view-more-link">
        View More
        <img src={arrow} alt="" />
      </a>
    </div>
  );
};

export default View;
