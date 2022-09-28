import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import './Checkout.css'
import CheckoutItem from './checkoutItem'
import Subtotal from './Subtotal'


function Checkout() {
  const[{cart},dispatch]=useContext(UserContext)
  return (<>
    <h1 className='title'>Shopping Cart</h1>
      <div className='checkout'>
        <div className='checkout__items'>
        {cart.map((item)=>(
          <CheckoutItem
            id={item.id}
            title={item.title}
            rating={item.rating}
            price={item.price}
            src={item.src}          
          />
        ))}
        </div>
       <Subtotal />
      </div>
  </>
  )
}

export default Checkout
