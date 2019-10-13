import React, { Component } from 'react';
import Tree from "./Tree";
import { TreesConsumer } from "../context";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
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
        this.setState({search:event.target.value.substr(0,20)})
    }
    render() {
        let filteredTrees = this.products.filter(
            (product) =>{
                return product.name.indexOf(this.state.search)!==-1;
            }

        )
        
        //console.log(this.state.trees);
        return (
            <div className="container py-5">

                <div>
                <Form inLine>
                    <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} className="mr-sm-2" />
                    <Button onclick="myFunction()" variant="outline-success">Search</Button>
                </Form>
                </div>

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
