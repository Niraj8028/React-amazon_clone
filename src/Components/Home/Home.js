import React from 'react'
import Header from '../Header/Header'
import Product from '../Product/Product'
import './Home.css'


function Home() {
  return (
    <div className='home'>
      <img className='home-banner' alt='banner' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg' />\
      <div className='product-rows'>
        <Product
          id="101"
          title="PS5 Console- Horizon Forbidden West Bundle"
          price={549.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/71fa5+U25cL._SX522_.jpg"
        />
        <Product
          id="104"
          title="PlayStation VR Marvel's Iron Man VR Bundle"
          price={249.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/71hfAFNOO7L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="105"
          title="NBA 2K23 - PlayStation 4"
          price={59.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/81adYfJHzkL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="106"
          title="Logitech G29 Gaming Racing Wheel"
          price={89.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/61IYYoZ66VL._AC_UY327_FMwebp_QL65_.jpg"
        />
        

      </div>

      <div className='product-rows'>
      
        <Product
          id="102"
          title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
          price={399.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="103"
          title="Xbox Core Wireless Controller – Carbon Black"
          price={79.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/61X3uV04ztL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="103"
          title="Horizon Forbidden West Collector's Edition - PS4 and PS5 Entitlements"
          price={99.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/81jxpqvSJyL._AC_UY327_FMwebp_QL65_.jpg"
        />
        
      </div>
      <div className='product-rows'>
      
      <Product
          id="103"
          title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"
          price={59.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UY327_FMwebp_QL65_.jpg"
        />
      <Product
          id="103"
          title="SteelSeries Arctis Nova Pro Wireless Xbox Multi-System Gaming Headset"
          price={349.99
          }
          rating={5}
          src="https://m.media-amazon.com/images/I/714i7dRiFoL._AC_UY327_FMwebp_QL65_.jpg"
        />

      </div>

    </div>


  )
}

export default Home

// games banner=https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg
// banner 2=https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg