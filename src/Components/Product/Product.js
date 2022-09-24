import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className='product'>
            <img className='image' alt='product-image' src='https://m.media-amazon.com/images/I/71fa5+U25cL._SX522_.jpg' />
            <div className='product-details'>
                <p className='title'>PS5 Console- Horizon Forbidden West</p>
                <div className='rating'>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                </div>

                <p className='price'>$549.99</p>
                <button className='add-to-cart'>Add to Cart</button>
            </div>


        </div>
    )
}

export default Product
