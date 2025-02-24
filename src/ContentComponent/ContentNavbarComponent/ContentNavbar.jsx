import React from "react";
import "./index.css";
import Header from "./HeaderComponent/Header";
import Event from "./EventsComponent/Event";
import HowDo from "./HowDoComponent/HowDo";

const ContentNavbar = () => {
  return (
    <div class="grid__column-content-navbar">
      <Header></Header>
      <Event></Event>
      <HowDo></HowDo>
    </div>
  );
};

export default ContentNavbar;
