import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TreesConsumer } from '../context';

// 1:56:54

export default class Tree extends Component {
    render() {
        const {id, name, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" >
                    <Link to="/details">
                        <img src={img} alt="tree" className="card-img-top mb-1" onClick={()=>console.log("image clicked")}/>
                    </Link>
                    <button className="btnCart" disabled={inCart ? true:false} onClick={()=>{console.log("added to cart clicked")}}>
                        {inCart?(<p className="text-capitalize mb-0" disabled>
                            in cart
                        </p>):(<p className="text-capitalize m-1">Add to Cart</p>)}
                    </button>
                    </div>
                </div>
                
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`

`
