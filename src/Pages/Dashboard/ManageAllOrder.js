import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [purchages, setPurchages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/purchage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setPurchages(result));
  }, []);
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
                <div>
                  <button className="btn btn-xs">Pay</button>{" "}
                  <button className="btn btn-xs">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
