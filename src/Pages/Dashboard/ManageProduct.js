import React, { useEffect, useState } from "react";
import TableRow from "../Shared/TableRow";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-accent text-3xl text-center font-bold mb-3">
        Manage Products
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Available Quantity</th>
            <th>Minimum Quantity</th>
            <th>Price(unit)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <TableRow key={product._id} product={product}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
