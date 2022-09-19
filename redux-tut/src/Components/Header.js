import React from 'react'
// import iphone from '../image/iphone.jpg';
const Header = (props) => {
    console.log("props header",props.data);

  return (
    <>
    <div className='add-to-cart'>
        <span className='cart-count'>{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart" />
      </div>
      </>
  )
}

export default Header