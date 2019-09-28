import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './header.css';

function Header() {

    return (
        <div>
            <Navbar activeKey="/store" style={{paddingLeft:'10%',paddingRight:'00px',font:'Roboto'}} className="navbar"  variant="dark">
              <img src={require('../treeicon.png')} alt="Tree icon" height ="35" width="33"/> 
              <Navbar.Brand style={{color:'#05386b',fontWeight:'bold',fontSize:'25px',paddingLeft:'10px',paddingBottom:'7px'}} href="/">tree co.</Navbar.Brand>
              
              <Nav className="nav">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store">Shop</Nav.Link>
                <Nav.Link href="#pricing">Something else?</Nav.Link>
              </Nav>
              
              </Navbar>
            </div>
    )
}

export default Header;
