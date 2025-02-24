import React from "react";
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
];

const Report = () => {
  return (
    <div class="document-content-report">
      <div class="document-heading">Report</div>

      <div class="document-list">
        {reports.map((item) => (
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

export default Report;
