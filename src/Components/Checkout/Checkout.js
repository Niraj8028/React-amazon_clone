import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import './Checkout.css'
import CheckoutItem from './checkoutItem'
import Subtotal from './Subtotal'


function Checkout() {
  const[{cart},dispatch]=useContext(UserContext)
  const amount=0;
  return (<>
    <h1 className='title'>Your Shopping Cart</h1>
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
        <div>
        {
          cart.length>0 && <Subtotal />
        }
        </div>
        
       
      </div>
  </>
  )
}

export default Checkout
