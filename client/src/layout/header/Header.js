import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


function Header() {

    return (

        <header >
            <div className="logo">
                logo
            </div>
            <Link to="/"><h1>TreeCo WebApp</h1></Link>

        </header>
    )
}

export default Header;
