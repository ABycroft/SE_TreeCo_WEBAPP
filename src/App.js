import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "./header/Header"
import Store from './store/Store';
import Home from './home/Home';
import ClickedTree from './clickedTree/clickedTree';
import Cart from './cart/';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * App.js is the starting point for the React App. 
 * Any changes to this class will be applied throughout the entire app.
 */
function App() {
    return (
        <div className="App"> 
            <Router>
                <Header/>
                <body>
                <div className="container">
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/store" component={Store}/>
                    <Route path = "/details" component={ClickedTree}/>
                    <Route path = "/cart" component={Cart}/>
                </div>
                </body>
            </Router>
        </div>
    );
}

export default App;