import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";

import Purchase from "./Pages/Product Purchase/Purchase";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import PagenotFound from "./Pages/Shared/PagenotFound";
import Login from "./Pages/Login_Registration/Login";
import Registration from "./Pages/Login_Registration/Registration";
import RequireAuth from "./Pages/Login_Registration/RequireAuth";

function App() {
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
          <Route
            index
            element={
              <RequireAuth>
                <MyOrder></MyOrder>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="myreview"
            element={
              <RequireAuth>
                <MyReview></MyReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="myprofile"
            element={
              <RequireAuth>
                <MyProfile></MyProfile>
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
