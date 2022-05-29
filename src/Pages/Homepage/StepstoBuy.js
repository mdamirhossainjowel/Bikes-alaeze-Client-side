import React from "react";
import mobile from "../../Assets/mobile.JPG";
const StepstoBuy = () => {
  return (
    <div>
      <h1 className="text-4xl text-accent text-center font-semibold">
        Join Us.
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-2/3 lg:mx-auto my-14">
        <div className="my-auto">
          <p className="py-6 text-xl">
            Join Us by Create Account On Our Site. After Registration You can go
            to products store and you order what you need.We will Give you
            assuarence that our product will please you.We provide guranty to
            our customer that product is 100% original.
          </p>
        </div>
        <div className="card-body lg:w-1/2">
          <div className="text-center mb-8">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <img className="w-100" src={mobile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepstoBuy;
