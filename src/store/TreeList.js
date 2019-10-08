import React, { Component } from 'react';
import Tree from "./Tree";
import { TreesConsumer } from "../context";

// set up bootstrap
// https://youtu.be/wPQ1-33teR4?t=6727

class TreeList extends Component {
    render() {
        //console.log(this.state.trees);
        return (
            <div className="container py-5">

                <div className="row">
                    <TreesConsumer>

                        {value => {
                            //console.log(value)
                            
                                
                                return value.products.map( product =>{
                                    return <div className="col-md-3 tree-col" key={product.id}>
                                            <Tree product={product} addToCart={this.props.addToCart}/>
                                        </div>
                                })
                            
                        }}

                    </TreesConsumer>
                </div>
            </div>
        )
    }
}

export default TreeList
