import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [productreviews, setProductReviews] = useState([]);

  useEffect(() => {
    fetch("https://bikes-alaeze.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setProductReviews(data));
  }, []);
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-accent text-center mb-6">
        What Our Customer Says...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productreviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
