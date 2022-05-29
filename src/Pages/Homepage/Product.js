import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const {
    _id,
    name,
    image,
    description,
    minimum_quantity,
    available_quantity,
    price,
  } = props.product;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Minimum Quantity: {minimum_quantity}</p>
        <p>Available Quantity: {available_quantity}</p>
        <div className="card-actions">
          <button
            onClick={() => navigateToProductDetail(_id)}
            className="btn btn-accent"
          >
            PURCHASE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
