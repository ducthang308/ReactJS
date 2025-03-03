import React, { useState } from "react";
import vsdx from "../../../../../assets/img/vsdx.png";
import View from "../../../../ViewMoreComponent/View";

const reports = [
  {
    name: "Report 1",
    image: vsdx,
  },
  {
    name: "Report 2",
    image: vsdx,
  },
  {
    name: "Report 3",
    image: vsdx,
  },
  {
    name: "Report 4",
    image: vsdx,
  },
  {
    name: "Report 5",
    image: vsdx,
  },
  {
    name: "Report 6",
    image: vsdx,
  },
];

const Report = () => {
  const INIT = 4;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < reports.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };
  return (
    <div class="document-content-report">
      <div class="document-heading">Report</div>

      <div class="document-list">
        {reports.slice(0, visibleItems).map((item) => (
          <div class="document-item">
            <img src={item.image} alt="" class="document-item-img" />
            <span class="document-item-text">{item.name}</span>
          </div>
        ))}
        <View
          onClick={view}
          text={visibleItems < reports.length ? "View More" : "View Less"}
        />
      </div>
    </div>
  );
};

export default Report;
