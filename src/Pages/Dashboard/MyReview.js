import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const MyReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [user] = useAuthState(auth);
  console.log(user);
  const onSubmit = async (data) => {
    data.name = user?.displayName;
    data.image = user?.photoURL;
    data.rating = parseInt(data.rating);
    fetch(`https://bikes-alaeze.herokuapp.com/reviews`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">
      {/* <h1 className="text-accent text-3xl text-center">Add Product</h1> */}
      <div className="card-body lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="input input-bordered input-accent w-full max-w-lg h-24 mb-3"
            placeholder="Review"
            {...register("reviews", { required: true })}
          />{" "}
          <br />
          {errors.reviews?.type === "required" && "review is required"} <br />
          <textarea
            className="input input-bordered input-accent w-full max-w-lg h-24 mb-3"
            placeholder="Address"
            {...register("Address", { required: true })}
          />{" "}
          <br />
          {errors.Address?.type === "required" && "Address is required"} <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Ratings in (1-5)"
            type="number"
            {...register("rating", {
              min: 1,
              max: 5,
            })}
          />
          {errors.rating?.type === "required" && "rating is required"}
          <input
            className="btn btn-primary w-full max-w-lg"
            disabled={!isValid}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyReview;
