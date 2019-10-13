import React, { Component } from 'react';
import { TreesConsumer } from '../context';
import './success.css';

export default class PaymentSuccess extends Component {
    state = {
        cartFull: true
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
                                }
                            }
                        );
                    }
                          
                    return (
                        <div className="success">
                            <h2>Thank you for your purchase!</h2>
                            <br></br>
                            <h4>It should be delivered in 5-7 working days</h4>
                        </div>
                    );
                }}
            </TreesConsumer>
        )
    }
}
