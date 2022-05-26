import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [purchages, setPurchages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/mypurchage?Email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => {
        if (res?.status === 401 || res?.status === 403) {
          signOut(auth);
        }
      })
      .then((result) => setPurchages(result));
  }, [user]);
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
            <tr>
              <th>{index + 1}</th>
              <td>{purchage.Name}</td>
              <td>{purchage.Product}</td>
              <td>{purchage.Quantity}</td>
              <td>{purchage.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
