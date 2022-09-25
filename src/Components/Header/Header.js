import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { UserContext } from '../../Context/UserContext';




function Header() {

    const {cart}=useContext(UserContext);
    // let cart=['niraj','suraj'];
    // console.log(cart);
    
  return (
    <Link to='/'>
        <nav className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo'/>

            <div className='header__search'>
                <input type="text" className='header__searchInput'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
                

            <div className='header__navlinks'>
                <Link to="/signin" className="header__link">
                    <div className='header__options'>
                        <label className='first_line'>Hello</label>
                        <label className='second_line'>Sign In</label>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className='header__options'>
                        <label className='first_line'>Returns</label>
                        <label className='second_line'>& Orders</label>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className='header__options'>
                        <label className='first_line'>Your</label>
                        <label className='second_line'>Prime</label>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className='cart'>
                        <ShoppingCartOutlinedIcon className='first_line basket' />
                        <label className='second_line items-count'>{cart?.length}</label>
                    </div>
                </Link>
            </div>

        </nav>
    </Link>
  )
}

export default Header
