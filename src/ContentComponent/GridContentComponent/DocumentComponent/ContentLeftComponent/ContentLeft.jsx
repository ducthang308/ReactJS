import React from "react";
import Policy from "./PolicyComponent/Policy";
import Template from "./TemplateComponent/Template";
import Slider from "./SliderComponent/Slider";

const ContentLeft = () => {
  return (
    <div class="document-content-left">
      <Policy></Policy>
      <Template></Template>
      <Slider></Slider>
    </div>
  );
};

export default ContentLeft;
