import React, { Component } from 'react';
import TreeList from "./TreeList";

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Store extends Component {
    render() {
        return (
            <div>
                <h2>Store Page</h2>
                <TreeList/>
            </div>
        )
    }
}

export default Store
