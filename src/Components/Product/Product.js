import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import "./Product.css"

function Product({title,description,rating,price,src}) {
    // const [{cart},dispatch]=useContext(UserContext);
    return (
        <div className='product'>
            <div className='product-info'>
                <img className='image' alt='product-image' src='https://m.media-amazon.com/images/I/71fa5+U25cL._SX522_.jpg' />
                
                    <p className='title'>PS5 Console- Horizon Forbidden West</p>
                    <div className='rating'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>

                    <p className='price'><strong>$</strong>549.99</p>
                    <button className='add-to-cart'>
                        <p className='btn-text'>Add to Cart</p>
                    </button>
                
            </div>

        </div>
    )
}

export default Product
