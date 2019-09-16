import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {

    return (
        <header >
            <div className='top-bar'>
            </div>

            <div className='title-bar'>
                <h1><Link to="/">Header</Link></h1>
            </div>
        </header>
    )
}

export default Header;
