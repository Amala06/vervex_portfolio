import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";

import img3 from "../Images/3.png";
import "../Styles/HeroCarousel.css";

const MySwiper = () => {
  return (
    <div className="Carousel_container">
      <Carousel
        className="my-carousel"
        slidesToShow={2}
        autoPlay
        interval={2000}
        infiniteLoop
        showStatus={false}
        // showIndicators={false}
      >
        <div>
          <img src={img1} alt="" className="carousel-image" />
          {/* <p className="legend">Image 1</p> */}
        </div>
        <div>
          <img src={img2} alt="" className="carousel-image" />
          {/* <p className="legend">Image 2</p> */}
        </div>
        <div>
          <img src={img3} alt="" className="carousel-image" />
          {/* <p className="legend">Image 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default MySwiper;
