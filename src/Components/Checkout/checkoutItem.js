import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import './checkoutItem.css'

function CheckoutItem({title,id,rating,price,src}) {
    const[{cart},dispatch]=useContext(UserContext)

    const remove_from_cart=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        })
    }
  return (
    <div className='checkout__item'>
            <img className='item-img' src={src}/>
            <div className='checkout__itemdetails'>
                <p className='product_title'>{title}</p>
                <div className='rating'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                <p className='product_price'><strong>${price}</strong></p>
                <button className='remove_from_cart' onClick={remove_from_cart}>Remove Item</button>
            </div>
        </div>
  )
}

export default CheckoutItem
