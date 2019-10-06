import React, { Component } from 'react';
import TreeList from "./TreeList";
import './store.css';

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Store extends Component {
    render() {
        return (
            <div className="title">
                <h2 style={{ color: "#05386b" }}>Tree Products</h2>
                <TreeList />
            </div>
        )
    }
}

export default Store
