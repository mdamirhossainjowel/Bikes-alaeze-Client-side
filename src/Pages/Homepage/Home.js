import React from "react";

import Banner from "./Banner";
import BussinesSummury from "./BussinesSummury";
import Carousel from "./Carousel";

import Products from "./Products";
import Reviews from "./Reviews";
import StepstoBuy from "./StepstoBuy";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BussinesSummury></BussinesSummury>
      <Reviews></Reviews>
      <StepstoBuy></StepstoBuy>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
