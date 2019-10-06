import React, { Component } from 'react'
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
import { TreesConsumer } from '../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <div>
                <TreesConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <h2>Your Cart</h2>
                                    <CartTable />  
                                    <CartList value={value}/>
                                    <CartTotals value={value} />
                                </React.Fragment> 
                            )
                        } else{
                            return <CartEmpty />
                        }
                    }}
                </TreesConsumer>
            </div>
        )
    }
}
