import React from "react";
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
];

const Video = () => {
  return (
    <div class="content-announcement">
      <h1 class="content-heading">Video Gallery</h1>

      <div class="image-list">
        <ul class="image-list-item">
          {videos.map((item) => (
            <li class="image-list-item-position">
              <img src={item.image} alt="" />
              <i class="fa-solid fa-play image-list-item-position__absolute"></i>
            </li>
          ))}
        </ul>
      </div>

      <View></View>
    </div>
  );
};

export default Video;
