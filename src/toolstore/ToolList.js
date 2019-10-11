import React, { Component } from 'react';
import Tool from "./Tool";
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
                            
                                console.log(value.tools);
                                return value.tools.map( tool =>{
                                    return <div className="col-md-3 tree-col" key={tool.id}>
                                            <Tool product={tool} addToolToCart={this.props.addToolToCart}/>
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
