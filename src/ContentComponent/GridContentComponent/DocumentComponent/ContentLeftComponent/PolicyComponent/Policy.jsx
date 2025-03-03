import React, { useState } from "react";
import word1 from "../../../../../assets/img/word_-1.png";
import View from "../../../../ViewMoreComponent/View";

const policies = [
  {
    name: "Policy 1",
    image: word1,
  },
  {
    name: "Policy 2",
    image: word1,
  },
  {
    name: "Policy 3",
    image: word1,
  },
  {
    name: "Policy 4",
    image: word1,
  },
  {
    name: "Policy 6",
    image: word1,
  },
  {
    name: "Policy 7",
    image: word1,
  },
  {
    name: "Policy 8",
    image: word1,
  },
  {
    name: "Policy 9",
    image: word1,
  },
];

const Policy = () => {
  const INIT = 5;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < policies.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };
  return (
    <div class="document-content-policy">
      <div class="document-heading">Policy</div>

      <div class="document-list">
        {policies.slice(0, visibleItems).map((item, index) => (
          <div key={index} class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}

        <View
          onClick={view}
          text={visibleItems < policies.length ? "View More" : "View Less"}
        />
      </div>
    </div>
  );
};

export default Policy;
