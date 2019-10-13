import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const { cart } = value
    return (
        <div className="container-fluid">
            {cart.map(function(item, i){
                return <CartItem key={i} item={item} value={value} />
            })}
        </div>
    )
}
