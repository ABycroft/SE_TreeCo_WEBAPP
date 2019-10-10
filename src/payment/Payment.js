import React, { Component } from 'react';
import './payment.css';

export default class Payment extends Component {
    onSubmit = e => {
        
    };
    
    render() {
        return (
            <div className="form-container">
            <form className="form" onSubmit={this.onSubmit}>
                <br></br>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We will never share your email.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Name</label>
                    <input name="name" className="form-control" type="text " required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Shipping Address</label>
                    <input name="address" className="form-control" type="text" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Credit Card Information</label>
                    <input name="cardinfo" className="form-control" type="text" required />
                </div>
                <button type="submit" class="btn purchase" variant="light">Confirm</button>
            </form>
            <br></br>
            </div>
        )
    }
}
