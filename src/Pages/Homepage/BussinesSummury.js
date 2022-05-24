import React from 'react'
import { ShoppingCartIcon ,UserGroupIcon, ChatAlt2Icon} from '@heroicons/react/solid'
const BussinesSummury = () => {
    return (
        <div className="bg-base-100 mb-10">
  <h1 className='text-6xl font-semibold text-accent text-center'>MILLION BUSSNESS TRUST US</h1>
  <h1 className='text-2xl font-semibold text-black text-center'>TRAY TO UNDERSTAND USERS EXPECTATION</h1>

  <div className="stats shadow flex flex-col items-center justify-center lg:flex-row lg:justify-evenly mt-6 ">
  
  <div className="stat place-items-center">
  <ShoppingCartIcon className="h-14 w-14 ml-2 text-accent"/>

  <span className='text-2xl font-semibold'>0</span>
  <p className='text-xl text-accent font-semibold'>Products</p>
  </div>
  
  <div className="stat place-items-center">
  <UserGroupIcon className="h-14 w-14 ml-2 text-accent"/>
      <span className='text-2xl font-semibold'>0</span>
      <p className='text-xl text-accent font-semibold'>Clients</p>
 
  </div>
  
  <div className="stat place-items-center">
  <ChatAlt2Icon className="h-14 w-14 ml-2 text-accent"/>
  <span className='text-2xl font-semibold'>0</span>
 <p className='text-xl text-accent font-semibold'>Reviews</p>
  </div>
  
</div>
</div>
    )
}

export default BussinesSummury