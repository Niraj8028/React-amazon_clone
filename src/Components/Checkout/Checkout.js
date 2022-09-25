import React from 'react'
import './Checkout.css'
import CheckoutItem from './checkoutItem'
import Subtotal from './Subtotal'

function Checkout() {
  return (<>
    <h1 className='title'>Shopping Cart</h1>
    <div className='checkout'>
        <CheckoutItem/>
        
        <Subtotal/>
    </div>
    </>
  )
}

export default Checkout
