import React, { useContext } from 'react'
import { getCartTotal } from '../../Context/Reducer'
import { UserContext } from '../../Context/UserContext'
import './Subtotal.css'
import StripeCheckout from "react-stripe-checkout"

function Subtotal() {
  const [{cart},dispatch]=useContext(UserContext)
  let amount=0;
  {cart.map(item=>{
    amount=amount+item.price;
  })}
  console.log(amount);
  return (
    
    <div className='subtotal'>
      <p className='subtotal_text'>Subtotal {cart.length} Items:<strong> ${amount}</strong> </p>
      <div className='gift-check'>
        <input className='checkbox' type="checkbox" /><p className='gift'>This order contains a gift</p>

      </div>
      <StripeCheckout
      stripeKey='pk_test_51LimmASG7DXelm4V5rx0vWmB7g71NNCnks0oducjSM5FDnN7eqz8VcoN7BBZcsY9EkzZl0VfvI4QURMK3i4HdJut00rNtorq13'
      token=''
      amount={amount*100}
      name="Confirm Order"
      shippingAddress
      allowRememberMe
      >
      <button className='button'>Proceed To Checkout</button>
      </StripeCheckout>
    </div>
    
  )
}

export default Subtotal
