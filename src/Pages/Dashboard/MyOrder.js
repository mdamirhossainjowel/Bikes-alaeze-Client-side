import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const { data: purchages, refetch } = useQuery(["purchages", user], () =>
    fetch(`https://bikes-alaeze.herokuapp.com/mypurchage?Email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => {
      if (res?.status === 401 || res?.status === 403) {
        signOut(auth);
      }
      return res.json();
    })
  );

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://bikes-alaeze.herokuapp.com/purchage/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product deleted");
    refetch();
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-accent text-3xl text-center font-bold">My Orders</h1>
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
              {!purchage.shipped ? (
                <td>
                  {!purchage.paid ? (
                    <div>
                      <Link to={`/dashboard/payment/${purchage._id}`}>
                        <button className="btn btn-xs mr-2">Pay</button>
                      </Link>

                      <input
                        className="btn btn-xs"
                        onClick={() => handleDelete(purchage._id)}
                        type="submit"
                        value="Delete"
                      />
                    </div>
                  ) : (
                    <span className="bg-success rounded-full px-2 py-1">
                      Paid
                    </span>
                  )}
                </td>
              ) : (
                <td>
                  <span className="bg-success rounded-full px-2 py-1">
                    Received
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
