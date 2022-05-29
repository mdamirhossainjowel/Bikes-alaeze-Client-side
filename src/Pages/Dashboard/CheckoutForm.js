import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = (props) => {
  const { _id, Price, Name, Email } = props.paymentOrder;
  // let price;
  // let Name;
  // let Email;
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCardError] = useState("");
  const [cardSuccess, setcardSuccess] = useState("");

  const [clientSecret, setclientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
      body: JSON.stringify({ Price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setclientSecret(data.clientSecret);
        }
      });
  }, [Price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    if (paymentMethod) {
      console.log("[paymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: intenerror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: Name,
            email: Email,
          },
        },
      });
    if (intenerror) {
      setCardError(intenerror.message);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setcardSuccess("Your Payment is completed.");
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`http://localhost:5000/purchage/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        className="btn btn-xs mt-3"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {carderror ? <p className="text-red-500"> {carderror}</p> : ""}
      {cardSuccess ? <p className="text-green-500"> {cardSuccess}</p> : ""}
    </form>
  );
};

export default CheckoutForm;
