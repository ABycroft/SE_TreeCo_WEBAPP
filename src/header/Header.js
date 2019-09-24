import React from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import { Menu, Segment } from 'semantic-ui-react'
function Header() {

    return (
        <div>
            <Navbar style={{paddingLeft:'10%',paddingRight:'00px',font:'Roboto'}} className="navbar"  variant="dark">
              <img src={require('../treeicon.png')}height ="35" width="33"/>
              <Navbar.Brand style={{color:'#05386b',fontWeight:'bold',fontSize:'25px',paddingLeft:'10px'}} href="/">Tree Co.</Navbar.Brand>
              
              <Nav style={{padding:'5px',hover:'black',fontWeight:'bold'}} >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store">Shop</Nav.Link>
                <Nav.Link href="#pricing">Something else?</Nav.Link>
              </Nav>
              
              </Navbar>
            </div>
    )
}

export default Header;
