import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
  } = useForm({
    mode: "onChange",
  });
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const onSubmit = async (data) => {
    data.Product=product.name;
    data.Price = data.Quantity * product.price;
    
    fetch(`http://localhost:5000/purchage`, {
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
      <figure>
        <img src={product.image} alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            value={user.displayName}
            readOnly
            placeholder="Full Name"
            {...register("Name", { required: true })}
          />
          {errors.Name?.type === "required" && "Name is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            value={user.email}
            readOnly
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" && "Email is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Address"
            {...register("Address", { required: true })}
          />
          {errors.Address?.type === "required" && "Address is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Phone Number"
            {...register("Phone", { required: true })}
          />
          {errors.Name?.type === "required" && "Phone Number is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Quantity"
            type="number"
            {...register("Quantity", {
              min: product.minimum_quantity,
              max: product.available_quantity,
            })}
          />
          {errors.Quantity?.type === "min"
            ? `Quantity should be ${product.minimum_quantity}`
            : "" || errors.Quantity?.type === "max"
            ? `Stock amount ${product.available_quantity}`
            : ""}
          {/* <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Price"
            value={data.Quantity*product.price}
            readOnly
            type="number"
            {...register("Price")}
          /> */}

          <input
            className="btn btn-primary w-full max-w-lg"
            disabled={data.Quantity<product.minimum_quantity }
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
