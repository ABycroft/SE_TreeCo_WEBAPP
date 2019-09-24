import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TreesConsumer } from '../context';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// 1:56:54

export default class Tree extends Component {
    render() {
        const {id, name, img, price, inCart} = this.props.product;
        return (

            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div>
                    <Card bg="secondary text-white" style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={img} alt="tree" className="card-img-top mb-1" onClick={()=>console.log("image clicked")}  />
                    <Card.Body >
                        <Card.Title >Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card> 
                    </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`

`
