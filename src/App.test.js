import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './header/Header'
import Home from './home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Header /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Home /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});