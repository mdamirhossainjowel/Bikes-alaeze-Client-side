import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L4LsFFTJJY9sXt0N1eKSCGscek12i1pn0XPcAfe2cQo2GMW3s9IBu3ncwE8bzYo9l2eyOCmxW9aLx9rDcl515mA00PuylITQk"
);
const Payment = () => {
  let { id } = useParams();

  const url = `https://bikes-alaeze.herokuapp.com/purchage/${id}`;

  const { data: paymentOrder, isLoading } = useQuery(["purchage", id], () =>
    fetch(url, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold text-amber-800">
            <span className="text-2xl text-black">Hello</span>{" "}
            {paymentOrder.Name}
          </h1>
          <p className="py-6 text-xl">
            Your Order{" "}
            <span className="text-2xl text-amber-800">
              {paymentOrder.Product}
            </span>{" "}
            of{" "}
            <span className="text-2xl text-amber-800">
              {paymentOrder.Quantity}
            </span>{" "}
            Quantity. You Have to pay{" "}
            <span className="text-2xl text-amber-800">
              {paymentOrder.Price}
            </span>{" "}
            Bdt.{" "}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm paymentOrder={paymentOrder} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
