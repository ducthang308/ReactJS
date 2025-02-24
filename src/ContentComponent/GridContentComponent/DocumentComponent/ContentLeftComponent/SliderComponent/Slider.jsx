import React from "react";
import pp1 from "../../../../../assets/img/powerpoint_-1.png";

const sliders = [
  {
    name: "Template 1",
    image: pp1,
  },
  {
    name: "Template 2",
    image: pp1,
  },
  {
    name: "Template 3",
    image: pp1,
  },
];

const Slider = () => {
  return (
    <div class="document-content-slider">
      <div class="document-heading">Slider</div>

      <div class="document-list">
        {sliders.map((item) => (
          <div class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
