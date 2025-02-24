import React from "react";
import "./document.css";
import Left from "./ContentLeftComponent/ContentLeft";
import Right from "./ContentRightComponent/ContentRight";

const Document = () => {
  return (
    <div class="content-announcement">
      <h1 class="content-heading">Document Gallery</h1>
      <div class="document-content">
        <Left></Left>
        <Right></Right>
      </div>
    </div>
  );
};

export default Document;
