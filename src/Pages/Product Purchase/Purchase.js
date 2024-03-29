import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    refetch,
  } = useForm({
    mode: "onChange",
  });
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://bikes-alaeze.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(product);
  const onSubmit = (data) => {
    data.ProductId = product._id;
    data.Product = product.name;
    data.Price = data.Quantity * product.price;
    if (data.Quantity) {
      fetch(`https://bikes-alaeze.herokuapp.com/purchage`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      reset();
    } else {
      alert("Quantity Cant be empty");
    }
    toast.success("Product Purchased");
    refetch();
  };
  return (
    <>
      <h2 className="text-3xl text-center">Purchase Your Product</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">
        <div className="card-body items-center text-center lg:w-1/2">
          <figure className="px-10">
            <img src={product.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <h2 className="card-title">Name: {product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Minimum Quantity: {product.minimum_quantity}</p>
          <p>Available Quantity: {product.available_quantity}</p>
        </div>
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
              {...register(
                "Quantity",
                {
                  min: product.minimum_quantity,
                  max: product.available_quantity,
                }
                // { required: true }
              )}
            />
            {errors.Quantity?.type === "min"
              ? `Quantity should be ${product.minimum_quantity}`
              : "" || errors.Quantity?.type === "max"
              ? `Stock amount ${product.available_quantity}`
              : ""}
            {/* {errors.Quantity?.type === "required" && "Quantity is required"} */}
            {/* <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Price"
            value={getValues("Quantity") * product.price}
            readOnly
            type="number"
            {...register("Price", { required: true })}
          /> */}

            <input
              className="btn btn-primary w-full max-w-lg"
              disabled={!isValid}
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Purchase;
