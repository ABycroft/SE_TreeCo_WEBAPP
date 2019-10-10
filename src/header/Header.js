import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
        <div className="container">
        <img src={require('../treeicon.png')} alt="TreeIcon" className="logo"/>
        <NavLink exact={true} to="/" className="navbar-brand d-flex w-50 mr-auto">tree co.</NavLink>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
                <NavLink exact={true} activeClassName="active" to="/" id="home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/store" id="store">Tree Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/toolstore" id="store">Tool Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="/cart" id="cart">Cart</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;