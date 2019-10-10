import React from 'react';
import {Link} from 'react-router-dom';
import "./cart.css";


export default function CartTotals({value}) {
    const {cartTotal, emptyCart} = value;
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                text-capitalise text-right">
                     
                    <button className="btn btn-outline-danger 
                        test-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>emptyCart()}>
                            Clear Cart
                    </button>
                    <br></br>
                    <Link to="/payment">
                        <button className="btn purchase"
                            type="button"
                            variant="light">
                                Purchase
                        </button>
                    </Link>
                    <br></br><br></br>
                     <h3>
                         Total : ${cartTotal}
                     </h3>
                </div>
            </div>
        </div>
    </React.Fragment>
}
