import React from "react";
import Banner from "../../assets/banner.jpeg";
import "./banner.css";

function banner() {
  return (
    <div className="banner">
      <img src={Banner} alt="" className="banner_image" />
    </div>
  );
}

export default banner;
