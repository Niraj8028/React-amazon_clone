import React, { useContext } from 'react'
import { getCartTotal } from '../../Context/Reducer'
import { UserContext } from '../../Context/UserContext'
import './Subtotal.css'

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
      <button className='button'>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
