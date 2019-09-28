import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Home extends Component {
    render() {
        window.onload = function() {
            document.getElementById("home").classList.add('active');
            document.getElementById('store').classList.remove('active');
            document.getElementById('cart').classList.remove('active');
        }
        return (
            <div className='home-content'>
                <h2>Home page</h2>

                <Link to="/store" >
                    <div className='button'>Get Started</div>
                </Link>
            </div>
        )
    }
}

export default Home
