import React, { Component } from 'react';
import { TreesConsumer } from '../context';
import './success.css';

export default class PaymentSuccess extends Component {
    state = {
        cartFull: true,
        cartTotal: 0
    }

    render() {
        return (
            <TreesConsumer>
                {value => {
                    if(this.state.cartFull){
                        value.emptyCart();
                        console.log("success called");
                        this.setState(
                            ()=>{
                                return {
                                    cartFull: false,
                                    cartTotal: value.cartTotal
                                }
                            }
                        );
                    }
                          
                    return (
                        <div className="success">
                            <h2>Thank you for your purchase!</h2>
                            <br></br>
                            <h4>Your order will be delivered in 5-7 working days</h4>
                            <h4>Total: ${this.state.cartTotal}</h4>
                        </div>
                    );
                }}
            </TreesConsumer>
        )
    }
}
