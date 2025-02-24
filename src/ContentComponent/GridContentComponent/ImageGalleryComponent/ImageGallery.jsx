import React from "react";
import gr1 from "../../../assets/img/Mask Group 1.png";
import gr2 from "../../../assets/img/Mask Group -4.png";
import gr3 from "../../../assets/img/Mask Group -2.png";
import gr4 from "../../../assets/img/Mask Group -6.png";
import "./index.css";
import View from "../../ViewMoreComponent/View";

const images = [
  {
    image: gr1,
  },
  {
    image: gr2,
  },
  {
    image: gr3,
  },
  {
    image: gr4,
  },
];

const ImageGallery = () => {
  return (
    <>
      <div class="content-announcement">
        <h1 class="content-heading">Image Gallery</h1>

        <div class="image-list">
          {images.map((item, index) => (
            <div key={index} class="image-list-item">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <View></View>
      </div>
    </>
  );
};

export default ImageGallery;
