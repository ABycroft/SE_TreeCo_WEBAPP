import React, { Component } from 'react';
import Tree from "./Tree";
import { TreesConsumer } from "../context";
import "./treelist.css";
// set up bootstrap
// https://youtu.be/wPQ1-33teR4?t=6727

class TreeList extends Component {

    constructor()
    {
        super();
        this.state={
            search: ''
        };
    }

    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20).toLowerCase()})
    }
    render() {            
        return (
            <div className="container pb-5 pt-3" >
                <form className="text-right">
                    <input type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} className="mr-sm-2" />
                </form>
                <br></br>

                <div className="row">
                    <TreesConsumer>
                        {value => {                        
                            let filteredTrees = value.products.filter(
                                (product) =>{
                                    return product.name.toLowerCase().indexOf(this.state.search)!==-1;
                                }
                            )
                            return filteredTrees.map( product =>{
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
