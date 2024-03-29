import React, { Component } from 'react';
import styled from 'styled-components';
import { TreesConsumer } from '../context';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './tool.css';

export default class Tree extends Component {
    render() {
        const { id, name, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper>
                <TreesConsumer>
                    {(value) => (
                        <Card  className="cardParent">
                            
                            <Card.Img  width="300px" height="200px" variant="top" src={img} alt="tree" className="card-img-top mb-1" />
                            
                            <Card.Body>
                                <Card.Title className="cardTitle">{name}</Card.Title>
                                
                                <p>
                                    ${price}
                                </p>
                                <Button disabled={inCart?true:false} style={{backgroundColor:"#60DA99",color:"#ffffff"}}  variant="light" onClick={() =>{
                                    // onClick
                                    value.addToolToCart(id);
                                }}>
                                    {inCart?(<p className="test-capitalize mb-0">In Cart</p>):(<p className="test-capitalize mb-0">Add to Cart</p>)}
                                </Button>
                            </Card.Body>
                        </Card> 
                    )}
                </TreesConsumer>
            </ProductWrapper>
        )
    } // Old button color was #379683
}


// this deals with the border shadow and animation
const ProductWrapper = styled.div`
.cardParent{
    border-color:transparent;
    transition:all 0.1s linear;
}
&:hover{
    .cardParent{
        border: 0.01rem solid rgba(0,0,0,0.2);
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.2);
    }
}
`
