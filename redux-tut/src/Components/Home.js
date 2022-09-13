import React from 'react'
import iphone from '../image/iphone.jpg';
const Home = () => {
  return (
    <div>
      <div className='add-to-cart'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart" />
      </div>
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
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home