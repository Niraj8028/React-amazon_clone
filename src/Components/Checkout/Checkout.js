import React from 'react'
import './Checkout.css'
import CheckoutItem from './checkoutItem'

function Checkout() {
  return (<>
    <h1 className='title'>Shopping Cart</h1>
    <div className='checkout'>
        <CheckoutItem/>
        
        <div className='total'>Total amount</div>
    </div>
    </>
  )
}

export default Checkout
