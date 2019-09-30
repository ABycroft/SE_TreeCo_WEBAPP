import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const { cart } = value
    return (
        <div className="container-fluid">
            {cart.map(item =>{
                return <CartItem key={value.id} item={item} value={value}/>
            })}
        </div>
    )
}
