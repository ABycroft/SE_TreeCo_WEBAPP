import React, { Component } from 'react';
import Tree from "./Tree";
import {TreesConsumer} from "../context";

// set up bootstrap
// https://youtu.be/wPQ1-33teR4?t=6727

class TreeList extends Component {
    render() {
        //console.log(this.state.trees);
        return (
            <div className="container py-5">
                <h2>Product List</h2>
                <div className="row">
                    <TreesConsumer>
                        {value => {
                            //console.log(value)
                            return value.products.map( product =>{
                                return <Tree key={product.id} product={product}/>
                            })
                        }}
                    </TreesConsumer>
                </div>
            </div>
        )
    }
}

export default TreeList
