import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import "./Product.css"

function Product({title,id,rating,price,src}) {
    // const [{cart},dispatch]=useContext(UserContext);
    return (
        <div className='product'>
            <div className='product-info'>
                <img className='image' alt='product-image' src={src} />
                
                    <p className='title'>{title}</p>
                    <div className='rating'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>

                    <p className='price'><strong>$</strong>{price}</p>
                    <button className='add-to-cart'>
                        <p className='btn-text'>Add to Cart</p>
                    </button>
                
            </div>

        </div>
    )
}

export default Product
