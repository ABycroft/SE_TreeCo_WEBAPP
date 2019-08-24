import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <Link to="/main" >Get Started</Link>
            </div>
        )
    }
}

export default Home
