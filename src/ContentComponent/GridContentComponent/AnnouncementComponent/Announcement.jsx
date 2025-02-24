import React from "react";
import dateImg from "../../../assets/img/date.png";
import gallery from "../../../assets/img/image_gallery.png";
import gallery1 from "../../../assets/img/image_gallery-1.png";
import gallery2 from "../../../assets/img/image_gallery-2.png";
import gallery3 from "../../../assets/img/image_gallery-3.png";
import "./announcement.css";
import View from "../../ViewMoreComponent/View";

const contentItems = [
  {
    image: gallery,
    title: "New Learning System Is Live",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "05/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery1,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery2,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery3,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur sadipsicing elitrnividunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
];

const Announcement = () => {
  return (
    <>
      <div class="content-announcement">
        <h1 class="content-heading">Announcement</h1>
        <div class="content-announcement-item">
          {contentItems.map((item, index) => (
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

                  <div class="content-item-footer-text">
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <View></View>
      </div>
    </>
  );
};

export default Announcement;
