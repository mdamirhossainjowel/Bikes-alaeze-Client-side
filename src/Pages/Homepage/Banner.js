import React from "react";
import store from "../../Assets/store.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 lg:w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={store}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="bike banner"
        />
        <div>
          <h1 className="text-5xl font-bold lg:w-1/2">
            Welcome to <span className="text-accent">Bikes Alaeze</span> !
          </h1>
          <p className="py-6">
            Why buy from Bikes Alaeze? The Polygon bikes in our online bike shop
            are often half the price of comparable bikes in the market, and that
            is due to our direct to consumer business model. We source
            high-quality bikes from the manufacturer, cut out the middlemen, and
            pass on the savings to you.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
