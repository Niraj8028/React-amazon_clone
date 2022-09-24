import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <Link to='/'>
        <nav className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo'/>
            <div className='header__search'></div>
            <input type="text" className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
        </nav>
    </Link>
  )
}

export default Header
