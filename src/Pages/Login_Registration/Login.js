import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import useToken from "../../hook/useToken";
import auth from "../../firebase.init";
import login from "../../Assets/login.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [
    signInWithEmailAndPassword,
    userEmailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, usergoogle, loadinggoogle, errorgoogle] =
    useSignInWithGoogle(auth);
  const [token] = useToken(userEmailPass || usergoogle);
  const navigate = useNavigate();
  if (loadingEmailPass || loadinggoogle) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.Email, data.Password);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">
      <figure>
        <img src={login} alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="text-2xl font-bold text-accent text-center mb-4">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Enter Your Email"
            {...register("Email", { required: true })}
          />
          {errors.Email?.type === "required" && "Email is required"}

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Enter Your Password"
            type="password"
            {...register("Password", { required: true })}
          />
          {errors.Password?.type === "required" && "Password is required"}
          {errorEmailPass || errorgoogle ? (
            <p>Error: {errorEmailPass?.message || errorgoogle?.message}</p>
          ) : (
            ""
          )}

          <label className="flex justify-between">
            <div className="flex">
              <input
                type="checkbox"
                className="checkbox checkbox-accent mr-3 mb-3"
              />
              <span className="label-text">Remember me</span>
            </div>
            <div>
              <Link to="/" className="underline text-accent">
                Forgot Password
              </Link>
            </div>
          </label>

          <input
            className="btn btn-secondary w-full"
            type="submit"
            value="Login"
          />
        </form>
        <Link to="/registration" className="underline text-accent">
          New to Bikes Alaeze? Create Account.
        </Link>

        <div className="divider">OR</div>
        <div className="card-actions justify-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary w-full max-w-lg "
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
