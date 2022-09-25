import React from 'react'
import './checkoutItem.css'

function CheckoutItem() {
  return (
    <div className='checkout__item'>
            <img className='item-img' src="https://m.media-amazon.com/images/I/71fa5+U25cL._SX522_.jpg"/>
            <div className='checkout__itemdetails'>
                <p className='product_title'>PS5 Console- Horizon Forbidden West Bundle</p>
                <div className='rating'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                <p className='product_price'><strong>$549.99</strong></p>
                <button className='remove_from_cart'>Remove Item</button>
            </div>
        </div>
  )
}

export default CheckoutItem
