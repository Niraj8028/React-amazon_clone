import React from 'react'
import './Subtotal.css'

function Subtotal() {
  return (
    <div className='subtotal'>
      <p className='subtotal_text'>Subtotal 2 Items:<strong> ${100}</strong> </p>
      <div className='gift-check'>
        <input className='checkbox' type="checkbox" /><p className='gift'>This order contains a gift</p>

      </div>
      <button className='button'>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
