import React from "react";
import "./content.css";
import GridContent from "./GridContentComponent/GridContent";
import ContentNavbar from "./ContentNavbarComponent/ContentNavbar";

const Content = () => {
  return (
    <div class="content">
      <div class="grid__row">
        <GridContent></GridContent>
        <ContentNavbar></ContentNavbar>
      </div>
    </div>
  );
};

export default Content;
