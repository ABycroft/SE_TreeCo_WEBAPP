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
                    <Card  style={{ width: '18rem',backgroundColor:'#alice',fontFamily:'Montserrat' }}>
                    <Card.Img  width="300px" height="200px" variant="top" src={img} alt="tree" className="card-img-top mb-1" onClick={()=>console.log("image clicked")}  />
                    <Card.Body style={{backgroundColor:'#alice'}}>
                        <Card.Title style={{color:"#05386b",fontWeight:'bold',fontSize:'20px'}} >{name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button  style={{backgroundColor:"#379683",color:"#ffffff"}}  variant="light">Go somewhere</Button>
                    </Card.Body>
                    </Card> 
                    </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`

`
