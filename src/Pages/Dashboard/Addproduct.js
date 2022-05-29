import React from "react";
import { useForm } from "react-hook-form";

const Addproduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    fetch(`https://bikes-alaeze.herokuapp.com/products`, {
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
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && "Product Name is required"}
          <textarea
            className="input input-bordered input-accent w-full max-w-lg h-24 mb-3"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && "Description is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Image url"
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && "Image url is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Minimum Quantity"
            {...register("minimum_quantity", { required: true })}
          />
          {errors.minimum_quantity?.type === "required" &&
            "Minimum Quantity is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Available Quantity"
            {...register("available_quantity", { required: true })}
          />
          {errors.available_quantity?.type === "required" &&
            "Available Quantity is required"}
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.minimum_quantity?.type === "required" && "Price is required"}

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

export default Addproduct;
