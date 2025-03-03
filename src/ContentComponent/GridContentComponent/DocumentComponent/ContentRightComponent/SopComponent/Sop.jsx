import React, { useState } from "react";
import word1 from "../../../../../assets/img/word_-1.png";
import View from "../../../../ViewMoreComponent/View";

const sops = [
  {
    name: "Demo Script",
    image: word1,
  },
  {
    name: "App Introduction",
    image: word1,
  },
  {
    name: "Index",
    image: word1,
  },
  {
    name: "Training",
    image: word1,
  },
  {
    name: "Index",
    image: word1,
  },
  {
    name: "Training",
    image: word1,
  },
];

const Sop = () => {
  const INIT = 4;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < sops.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };
  return (
    <div class="document-content-sop">
      <div class="document-heading">SOP</div>

      <div class="document-list">
        {sops.slice(0, visibleItems).map((item) => (
          <div class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}
        <View
          onClick={view}
          text={visibleItems < sops.length ? "View More" : "View Less"}
        />
      </div>
    </div>
  );
};

export default Sop;
