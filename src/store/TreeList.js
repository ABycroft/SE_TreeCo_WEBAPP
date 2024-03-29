import React, { Component } from 'react';
import Tree from "./Tree";
import { TreesConsumer } from "../context";
import "./treelist.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

class TreeList extends Component {

    constructor()
    {
        super();
        this.state={
            search: '',
            filterString: '',
            filteredCategory: ''
        };
    }

    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20).toLowerCase()})
    }

    sortByCategory =(category, filterGroup) =>{
        this.setState(()=>{
            return{
                filterString: category,
                filteredCategory: filterGroup
            }
        })
    }
    clearFilter = () =>{
        this.setState(()=>{
            return{
                filterString: '',
                filteredCategory: ''
            }
        })
    }

    render() {            
        return (
            <div className="container pb-5 pt-3" >
                <form className="text-right">
                    <input type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} className="" />
                </form>
                <DropdownButton id="filterButton" className="dropdown-button btn mx-1" title="Filter by Category" onClick={this.handleClick} >
                                <Dropdown.Item as="button" onClick={() => {
                                    this.clearFilter()
                                    }}> Clear Filters
                                </Dropdown.Item>
                                <Dropdown.Header> Tree Category</Dropdown.Header>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("NZ Native", "category")
                                    }}> NZ Native</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Evergreen", "category")
                                    }}> Evergreen</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Deciduous", "category")
                                    }}> Deciduous</Dropdown.Item>
                                <Dropdown.Header> Soil Requirements </Dropdown.Header>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Moderate", "soil")
                                    }}> Moderate</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Moist", "soil")
                                    }}> Moist</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Drained", "soil")
                                    }}> Drained </Dropdown.Item>
                                <Dropdown.Header> Sun Requirements</Dropdown.Header>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Full sun", "sun")
                                    }}> Full sun</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Moderate sun", "sun")
                                    }}> Moderate sun</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory("Semi shade", "sun")
                                    }}> Semi shade</Dropdown.Item>
                                <Dropdown.Header> Maximum Height</Dropdown.Header>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory(10, "height")
                                    }}> 5 - 10m</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory(20, "height")
                                    }}> 11 - 20m</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => {
                                    this.sortByCategory(21, "height")
                                    }}> 20+ m</Dropdown.Item>
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
                            let filteredByCategory = filteredTrees;

                            if(this.state.filteredCategory === 'category'){
                                filteredByCategory = filteredTrees.filter(
                                    (filteredTree) =>{
                                        return filteredTree.category.indexOf(this.state.filterString)!==-1;
                                    }
                                )    
                            }else if(this.state.filteredCategory === 'soil'){
                                filteredByCategory = filteredTrees.filter(
                                    (filteredTree) =>{
                                        return filteredTree.soil.indexOf(this.state.filterString)!==-1;
                                    }
                                ) 
                            }else if(this.state.filteredCategory === 'sun'){
                                filteredByCategory = filteredTrees.filter(
                                    (filteredTree) =>{
                                        return filteredTree.sun.indexOf(this.state.filterString)!==-1;
                                    }
                                ) 
                            }else if(this.state.filteredCategory === 'height'){
                                filteredByCategory = filteredTrees.filter(
                                    (filteredTree) =>{
                                        if(filteredTree.maxHeight < 11 && this.state.filterString === 10){
                                            return filteredTree
                                        }else if(filteredTree.maxHeight < 21 && filteredTree.maxHeight > 10 && this.state.filterString === 20){
                                            return filteredTree
                                        }else if(filteredTree.maxHeight > 20 && this.state.filterString === 21){
                                            return filteredTree
                                        }else{
                                            return null
                                        }
                                    }
                                ) 
                            }
                            
                            return filteredByCategory.map( product =>{
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
