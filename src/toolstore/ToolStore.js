import React, { Component } from 'react';
import ToolList from "./ToolList";
import './toolstore.css';
import { TreesConsumer } from '../context';

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Store extends Component {
    render() {
        return (
            <div className="title">
                <h2 style={{ color: "#05386b" }}>Tool Products</h2>
                <TreesConsumer>
                    {(value) => (
                        <div className="text-right">
                            <button className="btn mx-1" onClick={value.sortToolsByPrice} style={{backgroundColor:"#60DA99",color:"#ffffff"}} variant="light">Sort by Price</button>
                            <button className="btn mx-1" onClick={value.sortToolsByName} style={{backgroundColor:"#60DA99",color:"#ffffff"}} variant="light">Sort by Name</button>
                        </div>
                    )}
                </TreesConsumer>
                <ToolList />
            </div>
        )
    }
}

export default Store
