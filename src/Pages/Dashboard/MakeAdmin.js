import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://bikes-alaeze.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const makeAdmin = (email) => {
    console.log(email);
    fetch(`https://bikes-alaeze.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => makeAdmin(user.email)}
                    className="btn btn-xs"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
