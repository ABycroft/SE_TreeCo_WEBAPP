import React from 'react'

export default function CartItem({item, value}) {
    const {id, name, img, price, quantity} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    style={{width: '5rem',height: "5rem"}}
                    className="img-fluid"
                    alt="tree"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span>
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    {/* css in app.css*/}
                    <span className="btn btn-remove mx-1" onClick={()=>decrement(id)}>-</span>
                    <span className="btn btn-black mx-1" >{quantity}</span>
                    <span className="btn btn-add mx-1" onClick={()=>increment(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-remove" onClick={()=>removeItem(id)}>
                    remove
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>$ {price*quantity}</strong>
            </div>
        </div>
    )
}
