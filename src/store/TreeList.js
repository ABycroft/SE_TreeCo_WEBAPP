import React, { Component } from 'react';
import Tree from "./Tree";
import { TreesConsumer } from "../context";
import "./treeList.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
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
                <DropdownButton id="filterButton" class="btn mx-1" title="Filter by Category" onClick={this.handleClick} >
                                <Dropdown.Header> Tree Category</Dropdown.Header>
                                <Dropdown.Item as="button" onClick={this.sortByCategory("NZ Native")}> NZ Native</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.sortByCategory("Evergreen")}> Evergreen</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.sortByCategory("Decidious")}> Decidious</Dropdown.Item>
                                <Dropdown.Header> Soil Requirements </Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={"Moderate"} onClick={this.sortBySoil}> Moderate</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Moist"} onClick={this.sortBySoil}> Moist</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Drained"} onClick={this.sortBySoil}> Drained </Dropdown.Item>
                                <Dropdown.Header> Sun Requirements</Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={"Full"} onClick={this.sortBySun}> Full sun</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Moderate"} onClick={this.sortBySun}> Moderate sun</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Semi"} onClick={this.sortBySun}> Semi shade</Dropdown.Item>
                                <Dropdown.Header> Maximum Height</Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={10} onClick={this.sortmaxHeight}> 5 - 10m</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={11} onSelect={this.sortmaxHeight}> 11 - 20m</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={12} onClick={this.sortmaxHeight}> 20+ m</Dropdown.Item>
                            </DropdownButton>
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
