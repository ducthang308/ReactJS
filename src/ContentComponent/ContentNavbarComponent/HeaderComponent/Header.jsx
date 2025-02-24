import React from "react";
import icon from "../../../assets/img/icon.png";
import icon1 from "../../../assets/img/icon-1.png";
import icon2 from "../../../assets/img/icon-2.png";
import icon3 from "../../../assets/img/icon-3.png";
import icon4 from "../../../assets/img/icon-4.png";
import icon5 from "../../../assets/img/icon-5.png";
import icon6 from "../../../assets/img/icon-6.png";
import icon7 from "../../../assets/img/icon-7.png";
import icon8 from "../../../assets/img/icon-8.png";
import "./index.css";

const boxes = [
  { img: icon, text: "Training" },
  { img: icon1, text: "Organization" },
  { img: icon2, text: "Task" },
  { img: icon3, text: "Global Sales" },
  { img: icon4, text: "Birthday" },
  { img: icon5, text: "Health" },
  { img: icon6, text: "Services Desk" },
  { img: icon7, text: "Truck" },
  { img: icon8, text: "Ideal" },
];

const Header = () => {
  return (
    <div class="content-navbar-header">
      <h1 class="content-heading">Quick Link</h1>

      <div class="grid-box">
        {boxes.map((item, index) => (
          <div key={index} class="box">
            <img src={item.img} alt="" class="box-img" />
            <p class="box-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
