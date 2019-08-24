import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './CSS/App.css';
import Header from "./layout/header/Header"
import Main from './pages/main/Main';
import Home from './pages/home/Home';

/**
 * App.js is the starting point for the React App. 
 * Any changes to this class will be applied throughout the entire app.
 */
function App() {
    return (
        <div className="App"> 
            <Router>
                <Header/>
                <div className="container">
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/main" component={Main}/>
                </div>
            </Router>
        </div>
    );
}

export default App;