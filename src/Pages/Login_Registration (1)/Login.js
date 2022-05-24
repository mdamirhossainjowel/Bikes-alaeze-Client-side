import React from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    userEmailPass,
    loadingEmailPass,
    errorEmailPass,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, usergoogle, loadinggoogle, errorgoogle] = useSignInWithGoogle(auth);
  if (errorEmailPass || errorgoogle) {
    return (
      <div>
        <p>Error: {errorEmailPass?.message || errorgoogle?.message}</p>
      </div>
    );
  }
  if (loadingEmailPass||loadinggoogle) {
    return <Loading></Loading>;
  }
  if (userEmailPass||usergoogle) {
    
   navigate('/');
  }
const onSubmit = data => {
    if(data.Password===data.Confirm_Password){
      signInWithEmailAndPassword(data.Email, data.Confirm_Password);
    }
    else{
        alert("Both Password Should Be Same")
    }
}
    return (
      

<div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">

  <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"/></figure>
  <div className="card-body lg:w-1/2">
    <h2 className="text-2xl font-bold text-accent text-center mb-4">LOGIN</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  className="input input-bordered input-accent w-full max-w-lg mb-3" placeholder='Enter Your Email' {...register("name", { required: true})} />
      <input  className="input input-bordered input-accent w-full max-w-lg mb-3" placeholder='Enter Your Password'  {...register("password", { required: true})} />
   
  <label className="flex justify-between">
    <div className='flex'>
    <input type="checkbox" className="checkbox checkbox-accent mr-3 mb-3" />
    <span className="label-text">Remember me</span>
    </div>
    <div>
      <Link to='/' className='underline text-accent'>Forgot Password</Link>
    </div>
  </label>

      <input className="btn btn-secondary w-full" type="submit" />
    </form>
    <Link to='/registration' className='underline text-accent'>New to Bikes Alaeze? Create Account.</Link>

    <div className="divider">OR</div>
    <div className="card-actions justify-center">
      <button onClick={() => signInWithGoogle()} className="btn btn-primary w-full max-w-lg ">Login With Google</button>
    </div>
  </div>
</div>

    )
}

export default Login