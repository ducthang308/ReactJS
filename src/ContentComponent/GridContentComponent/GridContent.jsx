import React from "react";
import Announcement from "./AnnouncementComponent/Announcement";
import News from "./NewsComponent/News";
import ImageGallery from "./ImageGalleryComponent/ImageGallery";
import Video from "./VideoGalleryComponent/Video";
import Document from "./DocumentComponent/Document";
import "./index.css";

const GridContent = () => {
  return (
    <div class="grid__column-content grid-content">
      <Announcement></Announcement>
      <News></News>
      <ImageGallery></ImageGallery>
      <Video></Video>
      <Document></Document>
    </div>
  );
};

export default GridContent;
