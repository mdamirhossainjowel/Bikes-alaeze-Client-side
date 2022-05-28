import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login&Registration/Login";
import Purchase from "./Pages/Product Purchase/Purchase";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import PagenotFound from "./Pages/Shared/PagenotFound";
import Registration from "./Pages/Login&Registration/Registration";
import RequireAuth from "./Pages/Login&Registration/RequireAuth";
import Addproduct from "./Pages/Dashboard/Addproduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import useAdmin from "./hook/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Updateproducts from "./Pages/Dashboard/Updateproducts";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {!admin ? (
            <Route index element={<MyOrder></MyOrder>}></Route>
          ) : (
            <Route index element={<ManageAllOrder></ManageAllOrder>}></Route>
          )}
          {!admin && (
            <Route path="myreview" element={<MyReview></MyReview>}></Route>
          )}
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          {admin && (
            <Route
              path="addproduct"
              element={<Addproduct></Addproduct>}
            ></Route>
          )}
          {admin && (
            <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          )}
          {admin && (
            <Route
              path="manageproducts"
              element={<ManageProduct></ManageProduct>}
            ></Route>
          )}
          {admin && (
            <Route
              path="manageproducts/updateproducts/:id"
              element={<Updateproducts></Updateproducts>}
            ></Route>
          )}
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
