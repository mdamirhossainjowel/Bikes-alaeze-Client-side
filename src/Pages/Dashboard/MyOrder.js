import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const MyOrder = () => {
  const [purchages, setPurchages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://bikes-alaeze.herokuapp.com/mypurchage?Email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => {
        if (res?.status === 401 || res?.status === 403) {
          signOut(auth);
        }
        return res.json();
      })
      .then((result) => setPurchages(result));
  }, [user]);
  const handleDelete = (id) => {
    fetch(`https://bikes-alaeze.herokuapp.com/purchage/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product deleted");
  };

  return (
    <div className="overflow-x-auto">
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
                  <div>
                    <Link to={`/dashboard/payment/${purchage._id}`}>
                      <button className="btn btn-xs mr-2">Pay</button>
                    </Link>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleDelete(purchage._id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className="bg-success rounded-full px-2 py-1">
                    Paid
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
