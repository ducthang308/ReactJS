import React from "react";
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
];

const Policy = () => {
  return (
    <div class="document-content-policy">
      <div class="document-heading">Policy</div>

      <div class="document-list">
        {policies.map((item) => (
          <div class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}

        <View></View>
      </div>
    </div>
  );
};

export default Policy;
