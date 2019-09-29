import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

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
        <img src={require('../treeicon.png')} alt="Tree icon" height="35" width="33" />
        <a href="/" className="navbar-brand d-flex w-50 mr-auto">tree co.</a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
                <a className="" href="/" id="home">Home</a>
              </li>
              <li className="nav-item">
                <a className="" href="/store" id="store">Store</a>
              </li>
              <li className="nav-item">
                <a className="" href="/cart" id="cart">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;