import React, { useState } from "react";
import View from "../../ViewMoreComponent/View";
import clock from "../../../assets/img/clock.png";
import "./index.css";

const events = [
  {
    date: "01",
    month: "Jan",
    title: "Register Portal",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
  {
    date: "02",
    month: "Jan",
    title: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
  {
    date: "03",
    month: "Jan",
    title: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
  {
    date: "04",
    month: "Jan",
    title: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
  {
    date: "05",
    month: "Jan",
    title: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
  {
    date: "06",
    month: "Jan",
    title: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
    image: clock,
  },
];

const Event = () => {
  const INIT = 4;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < events.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };
  return (
    <div class="content-navbar-events">
      <h1 class="content-heading">Events</h1>

      {events.slice(0, visibleItems).map((item) => (
        <div class="content-navbar-box-grid">
          <div class="content-navbar-events-box">
            <div class="content-navbar-box-month">
              <p class="content-events-text">{item.date}</p>
              <p class="content-events-month">{item.month}</p>
            </div>
            <div class="content-navbar-box-text">
              <h2 class="content-box-heading">{item.title}</h2>

              <div class="content-box-time">
                <img src={item.image} alt="" class="content-box-time-img" />
                <p class="content-box-time-text">{item.time}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <View
        onClick={view}
        text={visibleItems < events.length ? "View More" : "View Less"}
      />
    </div>
  );
};

export default Event;
