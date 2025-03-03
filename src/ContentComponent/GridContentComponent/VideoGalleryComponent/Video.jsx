import React, { useState } from "react";
import "./video.css";
import View from "../../ViewMoreComponent/View";
import vd from "../../../assets/img/video.png";
import vd1 from "../../../assets/img/video-1.png";
import vd2 from "../../../assets/img/video-2.png";
import vd3 from "../../../assets/img/video-3.png";

const videos = [
  {
    image: vd,
  },
  {
    image: vd1,
  },
  {
    image: vd2,
  },
  {
    image: vd3,
  },
  {
    image: vd,
  },
  {
    image: vd1,
  },
  {
    image: vd2,
  },
  {
    image: vd3,
  },
];

const Video = () => {
  const INIT = 4;
  const [visibleItems, setVisibleItems] = useState(INIT);

  const view = () => {
    if (visibleItems < videos.length) {
      setVisibleItems((prev) => prev + INIT);
    } else {
      setVisibleItems(INIT);
    }
  };
  return (
    <div class="content-announcement">
      <h1 class="content-heading">Video Gallery</h1>

      <div class="image-list">
        <ul class="image-list-item">
          {videos.slice(0, visibleItems).map((item) => (
            <li class="image-list-item-position">
              <img src={item.image} alt="" />
              <i class="fa-solid fa-play image-list-item-position__absolute"></i>
            </li>
          ))}
        </ul>
      </div>

      <View
        onClick={view}
        text={visibleItems < videos.length ? "View More" : "View Less"}
      ></View>
    </div>
  );
};

export default Video;
