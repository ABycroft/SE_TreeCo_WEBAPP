import React, { Component } from 'react';
import { TreesConsumer } from '../context';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class clickedTree extends Component {
    render() {
        return (
          <TreesConsumer>
            {value => {
              const {id, name, img, price, category, soil, sun, maxHeight, care, inCart, about} = value.clickedTree;
              return (
                <div className="container py-5">
                  <div className='row'>
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <h1>
                        {name}
                      </h1>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} className="img-fluid" alt="tree"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                    <h3>Product Description and Care</h3>
                      <p>
                        {about}
                      </p>
                      <p>
                        {care}
                      </p>
                      <h3> Requirements</h3>
                      <p>
                        <div> Tree Category: {category}</div>
                        <div> Soil: {soil}</div>
                        <div> Sun: {sun}</div>
                        <div> Maximum Height: {maxHeight} m</div>
                      </p>
                      <h2>${price}</h2>
  
                      <Link to="/store">
                        <Button style={{backgroundColor:"#60DA99",color:"#ffffff"}}  variant="light">
                          Back To Store
                        </Button>
                  </Link>
                  <Button className="btn-green" onClick={() => {
                    value.addToCart(id);
                  }} disabled={inCart ? true : false} variant="light">
                    {inCart ? (<p className="test-capitalize mb-0">In Cart</p>) : (<p className="test-capitalize mb-0">Add to Cart</p>)}
                  </Button>
                </div>
              </div>
            </div>
          )
        }}
      </TreesConsumer>
    )
  }
}