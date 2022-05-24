import React from 'react'

const Review = (props) => {
  const {reviews,name,image,Address,rating}=props.review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1>Ratings: <div className="rating">
      {
        rating===1?   <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> :""
      }
      {
        rating===2?   <><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /></> :""
      }
      {
        rating===3?   <><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /></> :""
      }
      {
        rating===4?   <><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /></> :""
      }
      {
        rating===5?   <><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /> <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /></> :""
      }
     
 
</div></h1>
    <p>{reviews}</p>
    <div className="card-actions">
    <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image }alt='user' />
  </div>
</div>
<div>
  <p>{name}</p>
  <p>{Address}</p>
</div>
    </div>
  </div>
</div>
    )
}

export default Review