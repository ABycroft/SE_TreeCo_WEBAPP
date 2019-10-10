import React, { Component } from 'react';
import './success.css'

export default class PaymentSuccess extends Component {
    render() {
        return (
            <div className="success">
                <h2>Thank you for your purchase!</h2>
                <br></br>
                <h4>It should be delivered in 5-7 working days</h4>
            </div>
        )
    }
}
