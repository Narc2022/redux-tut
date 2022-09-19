import React from 'react'
import iphone from '../image/iphone.jpg';
// import Header from './Header';
const Home = (props) => {
  console.log("props home",props);
  return (
    <div>
      <h1>
        Home Component
      </h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src={iphone} alt="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className='btn-wrapper item item3'>
          <button 
          onClick={()=>
          props.addToCartHandler({price:1000, name: 'i phone 1'})}
          >
            Add To Cart
          </button>
          <button className='remove-btn'
          onClick={()=>
          props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home