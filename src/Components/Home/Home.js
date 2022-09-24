import React from 'react'
import Header from '../Header/Header'
import Product from '../Product/Product'
import './Home.css'


function Home() {
  return (
    <div className='home'>
        <img className='home-banner' alt='banner' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'/>\
        <div className='product-rows'>
          <Product/>
          <Product/>
          <Product/>
          
        </div>
        
        <div className='product-rows'>
          <Product/>
          <Product/>
          
        </div>
        <div className='product-rows'>
          <Product/>
          
        </div>
        
    </div>
    
    
  )
}

export default Home

// games banner=https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg
// banner 2=https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg