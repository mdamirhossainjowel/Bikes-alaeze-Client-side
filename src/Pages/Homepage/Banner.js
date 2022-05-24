import React from 'react'

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-100 lg:w-2/3 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-lg rounded-lg shadow-2xl" alt='bike banner' />
    <div>
      <h1 className="text-5xl font-bold">Welcome to <span className='text-accent'>Bikes Alaeze</span> !</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}

export default Banner