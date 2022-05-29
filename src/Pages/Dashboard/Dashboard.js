import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {!admin && (
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="myreview">Add Review</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard">Manage All Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="addproduct">Add Product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="makeadmin">Make Admin</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="manageproducts">Manage Products</Link>
            </li>
          )}
          <li>
            <Link to="myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
