import React from "react";
import Sop from "./SopComponent/Sop";
import Report from "./ReportComponent/Report";

const ContentRight = () => {
  return (
    <div class="document-content-right">
      <Sop></Sop>
      <Report></Report>
    </div>
  );
};

export default ContentRight;
