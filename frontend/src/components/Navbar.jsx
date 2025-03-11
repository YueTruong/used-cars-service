import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'> {/* Hiển thị các tag menu nằm ngang (định dạng sẵn) */}
                <li className='link'><Link to="/">Mua xe</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/">Pages</Link></li>
                <li className='link'><Link to="/contact">Liên hệ</Link></li>
            </ul>
            
            {/* Logo */}
            <div className='nav__logo'>
                <Link to="/">Used Cars Service<span>.</span></Link>
            </div>

            {/* Nav icons */}
            <div className='nav__icons relative'>
                <span>
                    <Link to="/search">
                        <i className="ri-search-2-line"></i>
                    </Link>
                </span>
                <span>
                    <button className='hover:text-primary'>
                        <i className="ri-shopping-basket-line"></i>
                        <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>0</sup>
                    </button>
                </span>
                <span>
                    <Link to="login">
                        <i className="ri-user-3-line"></i>
                    </Link>
                </span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;