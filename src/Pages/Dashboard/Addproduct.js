import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
    toast.success("Product added successfully");
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto h-100 mb-14">
      {/* <h1 className="text-accent text-3xl text-center">Add Product</h1> */}
      <div className="card-body h-100 lg:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-1"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />{" "}
          <br />
          {errors.name?.type === "required" && "Product Name is required"}
          <br />
          <textarea
            className="input input-bordered input-accent w-full max-w-lg h-24 mb-1"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <br />
          {errors.description?.type === "required" && "Description is required"}
          <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-1"
            placeholder="Image url"
            {...register("image", { required: true })}
          />
          <br />
          {errors.image?.type === "required" && "Image url is required"}
          <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-1"
            placeholder="Minimum Quantity"
            {...register("minimum_quantity", { required: true })}
          />
          <br />
          {errors.minimum_quantity?.type === "required" &&
            "Minimum Quantity is required"}
          <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-1"
            placeholder="Available Quantity"
            {...register("available_quantity", { required: true })}
          />
          <br />
          {errors.available_quantity?.type === "required" &&
            "Available Quantity is required"}
          <br />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-1"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <br />
          {errors.minimum_quantity?.type === "required" && "Price is required"}
          <br />
          <input
            className="btn btn-accent w-full max-w-lg"
            disabled={!isValid}
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
