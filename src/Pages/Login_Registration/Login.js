import React from 'react'

const Login = () => {
    return (
      

<div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">

  <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-accent text-center mb-4">LOGIN</h2>
    <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-lg mb-4" />
  <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full max-w-lg mb-4" />
  <div class="flex">
    <input type="checkbox" defaultChecked="checked" class="checkbox checkbox-accent" />
    <span class="ml-3 label-text">Remember me</span>
  </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary w-full max-w-lg ">Login</button>
    </div>
    <div class="divider">OR</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary w-full max-w-lg ">Login With Google</button>
    </div>
  </div>
</div>

    )
}

export default Login