import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageAllOrder = () => {
  const [purchages, setPurchages] = useState([]);
  const [shippment, setshippment] = useState({});
  const [available, setAvailable] = useState({});
  const [shippedID, setshippedID] = useState("");

  useEffect(() => {
    fetch(`https://bikes-alaeze.herokuapp.com/purchage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setPurchages(result));
  }, []);

  const HandleDeliverd = (product, index) => {
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
    console.log(dataProduct);
    console.log(product._id);
    fetch(`https://bikes-alaeze.herokuapp.com/products/${product.ProductId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataProduct),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    const shippedprod = {
      shippedPord: product._id,
      shippedvalu: true,
    };
    fetch(`https://bikes-alaeze.herokuapp.com/shipped`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shippedprod),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    fetch(`https://bikes-alaeze.herokuapp.com/shipped`)
      .then((res) => res.json())
      .then((result) => setshippment(result));
    console.log(shippment);
    const shippedValue = shippment.find(
      (ship) => ship.shippedPord === product._id
    );
    const isshipped = shippedValue.shippedPord;
    console.log(isshipped);
    setshippedID(isshipped);
    toast.success("Product are Deliverd");
  };

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
              {shippedID === purchage._id ? (
                <td>
                  <span className="bg-warning rounded-full px-2 py-1">
                    Shipped
                  </span>
                </td>
              ) : (
                <td>
                  {!purchage.paid ? (
                    <span className="bg-warning rounded-full px-2 py-1">
                      Unpaid
                    </span>
                  ) : (
                    <input
                      className="btn btn-xs"
                      onClick={() => HandleDeliverd(purchage, index)}
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
