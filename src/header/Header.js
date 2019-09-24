import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {

    return (
        <header >
            
            <div className='title-bar'>
            
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/store">Cart</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
