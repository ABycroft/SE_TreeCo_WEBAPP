import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TreesConsumer } from '../context';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './tree.css';
// 1:56:54

export default class Tree extends Component {
    render() {
        const {id, name, img, price, inCart} = this.props.product;
        return (

            <ProductWrapper>
                <Card  className="cardParent">
                    <Card.Img  width="300px" height="200px" variant="top" src={img} alt="tree" className="card-img-top mb-1" onClick={()=>console.log("image clicked")}  />
                    <Card.Body>
                        <Card.Title className="cardTitle">{name}</Card.Title>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <Button onClick={()=>console.log("Add to Cart")} disabled={inCart?false:true}style={{backgroundColor:"#60DA99",color:"#ffffff"}}  variant="light">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </ProductWrapper>
        )
    } // Old button color was #379683
}

const ProductWrapper = styled.div`

`
