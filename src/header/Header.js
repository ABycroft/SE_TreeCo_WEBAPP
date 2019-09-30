import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './header.css';

function Header() {

    return (
        <div>
            <Navbar style={{paddingLeft:'10%',paddingRight:'00px',font:'Roboto'}} className="navbar"  variant="dark">
              <img src={require('../treeicon.png')} alt="Tree icon" height ="35" width="33"/> 
              <Navbar.Brand style={{color:'#05386b',fontWeight:'bold',fontSize:'25px',paddingLeft:'10px',paddingBottom:'7px'}} href="/">tree co.</Navbar.Brand>
              
              <Nav className="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/store">Shop</Link>
                <Link className="nav-link" to="/cart">Cart</Link>
              </Nav>
              
              </Navbar>
            </div>
    )
}

export default Header;
