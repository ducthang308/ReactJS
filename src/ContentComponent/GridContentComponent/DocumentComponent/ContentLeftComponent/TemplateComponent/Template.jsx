import React from "react";
import word1 from "../../../../../assets/img/word_-1.png";

const templates = [
  {
    name: "Template 1",
    image: word1,
  },
  {
    name: "Template 1",
    image: word1,
  },
  {
    name: "Template 1",
    image: word1,
  },
];

const Template = () => {
  return (
    <div class="document-content-corporate">
      <div class="document-heading">Corporate Template</div>

      <div class="document-list">
        {templates.map((item) => (
          <div class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
