import React, { Component } from 'react';
import {TreesConsumer} from '../context';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class clickedTree extends Component {
    render() {
        return (
          <TreesConsumer>
            {value => {
              const {id, name, img, price, inCart, about} = value.clickedTree;
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
                      <h2>${price}</h2>
                      <p>
                        {about}
                      </p>
  
                      <Link to="/store">
                        <Button variant="light">
                          Back To Store
                        </Button>
                      </Link>
                      <Button onClick={()=>{
                        value.addToCart(id);
                      }} disabled={inCart?true:false} variant="light">
                        {inCart?(<p className="test-capitalize mb-0">In Cart</p>):(<p className="test-capitalize mb-0">Add to Cart</p>)}
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
