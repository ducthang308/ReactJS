import React, { useState } from "react";
import dateImg from "../../../assets/img/date.png";
import gr0 from "../../../assets/img/Mask Group 2.png";
import gr1 from "../../../assets/img/Mask Group -1.png";
import gr2 from "../../../assets/img/Mask Group -2.png";
import gr3 from "../../../assets/img/Mask Group -3.png";
import View from "../../ViewMoreComponent/View";

const newItems = [
  {
    image: gr0,
    title: "Tomorrow Healthy Check",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusem et justo duo d ea rebum. gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum dolor sit amet, consetetur sadim ipsum dolorsadi.",
    date: "05/Jan/2021",
  },
  {
    image: gr1,
    title: "Air conditioning is broken",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
  {
    image: gr2,
    title: "Keep Running",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
  {
    image: gr3,
    title: "Temperature above 37.3℃ need to report",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
  {
    image: gr0,
    title: "Tomorrow Healthy Check",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusem et justo duo d ea rebum. gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet... consetetur sadip m ipsum dolor sit amet, consetetur sadim ipsum dolorsadi.",
    date: "05/Jan/2021",
  },
  {
    image: gr1,
    title: "Air conditioning is broken",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
  {
    image: gr2,
    title: "Keep Running",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
  {
    image: gr3,
    title: "Temperature above 37.3℃ need to report",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
  },
];

const News = () => {
  const INIT = 4;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < newItems.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };

  return (
    <>
      <div class="content-announcement">
        <h1 class="content-heading">News</h1>
        <div class="content-announcement-item">
          {newItems.slice(0, visibleItems).map((item, index) => (
            <div key={index} class="content-item">
              <img src={item.image} alt="" class="content-item-img" />

              <div class="content-item-context">
                <h2 class="content-item-heading">{item.title}</h2>
                <p class="content-item-text">{item.description}</p>

                <div class="content-item-footer">
                  <div class="content-item-time">
                    <img src={dateImg} alt="" class="content-item-time-img" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <View
          onClick={view}
          text={visibleItems < newItems.length ? "View More" : "View Less"}
        ></View>
      </div>
    </>
  );
};

export default News;
