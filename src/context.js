import React, { Component } from 'react'
import {treesData, clickedTree} from "./data";

const TreesContext = React.createContext();
//Provider
//Consumer

class TreesProvider extends Component {
    state ={
        products: [],
        cart: [],
        clickedTree: clickedTree,
        cartTotal: 0
    };
    componentDidMount(){
        this.setProducts();
    };
    // changed before https://youtu.be/wPQ1-33teR4?t=10055
    setProducts = () =>{
        let tempProducts = [];
        treesData.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=>{
            return{products: tempProducts}
        })
        
    };

    getTree = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleClickedTree = id => {
        const clickedTree = this.getTree(id);
        this.setState(()=>{
            return {clickedTree:clickedTree}
        })
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getTree(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.quantity++;

        this.setState(
            ()=>{
                return {products:tempProducts, cart:[...this.state.cart, product]};
            }, 
            ()=>{
                this.getTotal();
            }
        );
    };

    increment = id =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.quantity++;

        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.getTotal()})

    };
    decrement = id =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        if(product.quantity === 0){
            this.removeItem(id);
        }else{
            product.quantity--;
            this.setState(()=>{return{cart:[...tempCart]}},()=>{this.getTotal()});
        }
    };
    removeItem = id =>{
        let tempTrees = [...this.state.products];
        let tempCart = [...this.state.cart];
        
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempTrees.indexOf(this.getTree(id));
        let removedProduct = tempTrees[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;

        this.setState(()=>{
            return {
                cart:[...tempCart],
                products:[...tempTrees]
            }
        },()=>{
            this.getTotal();
        })
    };
    emptyCart = id =>{
        this.setState(()=>{
            return {cart: []};
        },()=>{
            this.setProducts();
            this.getTotal();
        });
    };
    getTotal = () =>{
        let calcTotal = 0;
        this.state.cart.map(item =>(calcTotal += (item.price*item.quantity)));
        this.setState(()=>{
            return {
                cartTotal: calcTotal
            }
        })

    }
    
    render() {
        return (
            <TreesContext.Provider value={{
                ...this.state,
                handleClickedTree: this.handleClickedTree,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                emptyCart: this.emptyCart
            }}>
                {this.props.children}
            </TreesContext.Provider>
        )
    }
}

const TreesConsumer = TreesContext.Consumer;

export {TreesProvider, TreesConsumer}