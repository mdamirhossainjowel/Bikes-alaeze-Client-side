import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const ManageAllOrder = () => {
  const [available, setAvailable] = useState({});

  const { data: purchages, refetch } = useQuery("purchages", () =>
    fetch("https://bikes-alaeze.herokuapp.com/purchage", {
      method: "GET",
    }).then((res) => res.json())
  );

  const HandleDeliverd = (product) => {
    fetch(`https://bikes-alaeze.herokuapp.com/products/${product.ProductId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setAvailable(result));
    const dataProduct = {
      available_quantity: (
        available.available_quantity - product.Quantity
      ).toString(),
      minimum_quantity: available.minimum_quantity,
      price: available.price,
    };

    fetch(`https://bikes-alaeze.herokuapp.com/products/${product.ProductId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataProduct),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    const manageorder = {
      shipped: true,
      transactionId: product.transactionId,
    };
    fetch(`https://bikes-alaeze.herokuapp.com/purchage/${product._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
      body: JSON.stringify(manageorder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const HandleDelete = (id) => {
    fetch(`https://bikes-alaeze.herokuapp.com/purchage/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product deleted");
  };
  refetch();
  return (
    <div className="overflow-x-auto">
      <h1 className="text-accent text-3xl text-center font-bold">All Orders</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {purchages?.map((purchage, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{purchage.Name}</td>
              <td>{purchage.Product}</td>
              <td>{purchage.Quantity}</td>
              <td>{purchage.Price}</td>
              {purchage.shipped ? (
                <td>
                  <span className="bg-warning rounded-full px-2 py-1">
                    Shipped
                  </span>
                </td>
              ) : (
                <td>
                  {!purchage.paid ? (
                    <div>
                      {" "}
                      <span className="bg-warning rounded-full px-2 py-1">
                        Unpaid
                      </span>
                      <input
                        className="btn btn-xs"
                        onClick={() => HandleDelete(purchage._id)}
                        type="submit"
                        value="Delete"
                      />
                    </div>
                  ) : (
                    <input
                      className="btn btn-xs"
                      onClick={() => HandleDeliverd(purchage)}
                      type="submit"
                      value="Pending"
                    />
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
