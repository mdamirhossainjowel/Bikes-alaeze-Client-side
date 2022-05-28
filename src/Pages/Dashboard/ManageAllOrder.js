import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [purchages, setPurchages] = useState([]);
  // const [available, setAvailable] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/purchage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setPurchages(result));
  }, []);

  // const HandleDeliverd = () => {
  // fetch(`http://localhost:5000/products/${product.ProductId}`, {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((result) => {
  //     setAvailable(result);
  //     console.log(result);
  //   });
  // const minimumquantity = available.minimum_quantity;
  // const pricepro = available.price;
  // const availablequantity = available.available_quantity - product.Quantity;
  // const data = {
  //   available_quantity: availablequantity,
  //   minimum_quantity: minimumquantity,
  //   price: pricepro,
  // };
  // console.log(data);
  // console.log(available.minimum_quantity, available.price, product.Quantity);
  // fetch(`http://localhost:5000/products/${product.ProductId}`, {
  //   method: "PUT",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));
  // };
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
              <td>
                {!purchage.paid ? (
                  <span className="bg-warning rounded-full px-2 py-1">
                    Unpaid
                  </span>
                ) : (
                  <input className="btn btn-xs" type="submit" value="Pending" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
