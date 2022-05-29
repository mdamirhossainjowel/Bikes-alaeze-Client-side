import React from "react";
import carousel1 from "../../Assets/carousel1.jpg";
import carousel2 from "../../Assets/carousel2.png";
import carousel3 from "../../Assets/carousel3.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-52">
        <img src={carousel1} className="w-full h-52" alt="cars carosel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-52">
        <img src={carousel2} className="w-full h-52" alt="cars carosel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-52">
        <img src={carousel3} className="w-full h-52" alt="cars carosel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
