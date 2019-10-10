import React, { Component } from 'react';
import './payment.css';

export default class Payment extends Component {
    onSubmit = e => {
        e.preventDefault();
    };
    
    render() {
        return (
            <div className="form-container">
            <form className="form" onSubmit={this.onSubmit}>
                <br></br>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We will never share your email.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Name</label>
                    <input className="form-control" type="text " required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Shipping Address</label>
                    <input className="form-control" type="text" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Credit Card Information</label>
                    <input className="form-control" type="text" required />
                </div>
                
                <button type="submit" class="btn purchase" variant="light">Confirm</button>
                
            </form>
            <br></br>
            </div>
        )
    }
}
