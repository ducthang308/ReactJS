import React, { useState } from "react";
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
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery1,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery2,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery3,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery,
    title: "New Learning System Is Live",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery1,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery2,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
  {
    image: gallery3,
    title: "IT Maintenance",
    description:
      "New Wellness Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02/Jan/2021",
    category: "Human Resource",
  },
];

const Announcement = () => {
  const INITIAL_VISIBLE = 4;

  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE);

  const viewMore = () => {
    if (visibleItems < contentItems.length) {
      setVisibleItems((prev) => prev + INITIAL_VISIBLE);
    } else {
      setVisibleItems(INITIAL_VISIBLE);
    }
  };

  return (
    <div className="content-announcement">
      <h1 className="content-heading">Announcement</h1>
      <div className="content-announcement-item">
        {contentItems.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="content-item">
            <img src={item.image} alt="" className="content-item-img" />
            <div className="content-item-context">
              <h2 className="content-item-heading">{item.title}</h2>
              <p className="content-item-text">{item.description}</p>
              <div className="content-item-footer">
                <div className="content-item-time">
                  <img src={dateImg} alt="" className="content-item-time-img" />
                  <span>{item.date}</span>
                </div>
                <div className="content-item-footer-text">
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <View
        onClick={viewMore}
        text={visibleItems < contentItems.length ? "View More" : "View Less"}
      />
    </div>
  );
};

export default Announcement;
