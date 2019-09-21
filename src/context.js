import React, { Component } from 'react'
import {treesData} from "./data";

const TreesContext = React.createContext();
//Provider
//Consumer

class TreesProvider extends Component {
    state ={
        products: treesData
    }

    addToCart = () =>{
        console.log("Add to cart called")
    }
    
    render() {
        return (
            <TreesContext.Provider value={{
                ...this.state,
                AddToCart: this.addToCart
            }}>
                {this.props.children}
            </TreesContext.Provider>
        )
    }
}

const TreesConsumer = TreesContext.Consumer;

export {TreesProvider, TreesConsumer}