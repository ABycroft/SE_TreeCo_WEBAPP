import React, { Component } from 'react'
import {treesData, toolsData, clickedTree} from "./data";

const TreesContext = React.createContext();
//Provider
//Consumer

class TreesProvider extends Component {
    state = {
        products: [],
        tools: [],
        cart: [],
        clickedTree: clickedTree,
        cartTotal: 0,
        orderedByPriceLowtoHigh: false,
        orderedByNameLowtoHigh: false,
        orderedByCategory: false,
        orderedBySoil: false,
        orderedBySun: false,
        orderedByHeight: false,
        orderedToolsByName: false,
        orderedToolsByPrice: false,
    };
    componentDidMount() {
        this.setProducts();
    };

    setProducts = () =>{
        let tempProducts = [];
        treesData.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })

        let tempTools = [];
        toolsData.forEach(item =>{
            const singleItem = {...item};
            tempTools = [...tempTools, singleItem];
        })
            
        this.setState(()=>{
            return{ products: tempProducts,
                tools: tempTools }
        })

    };

    sortByPrice = () =>{
        let tempProducts = [...this.state.products];

        if(this.state.orderedByPriceLowtoHigh){
            tempProducts.sort((a, b) => b.price - a.price)
        }else{
            tempProducts.sort((a, b) => a.price - b.price)
        }

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    orderedByPriceLowtoHigh: !this.state.orderedByPriceLowtoHigh
                }
            }
        );
    };
    sortByName = () =>{
        let tempProducts = [...this.state.products];

        if(this.state.orderedByNameLowtoHigh){
            tempProducts.sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        }else{
            tempProducts.sort((a, b) => {
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            })
        }
        
        this.setState(
            ()=>{
                return {
                    products: tempProducts,
                    orderedByNameLowtoHigh: !this.state.orderedByNameLowtoHigh
                }
            }
        );
    };

    sortToolsByName = () =>{
        let tempProducts = [...this.state.tools];

        if(this.state.orderedToolsByName){
            tempProducts.sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        }else{
            tempProducts.sort((a, b) => {
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            })
        }
        
        this.setState(
            ()=>{
                return {
                    tools: tempProducts,
                    orderedToolsByName: !this.state.orderedToolsByName
                }
            }
        );
    };
    sortToolsByPrice = () =>{
        let tempProducts = [...this.state.tools];

        if(this.state.orderedToolsByPrice){
            tempProducts.sort((a, b) => b.price - a.price)
        }else{
            tempProducts.sort((a, b) => a.price - b.price)
        }

        this.setState(
            ()=>{
                return {
                    tools: tempProducts,
                    orderedToolsByPrice: !this.state.orderedToolsByPrice
                }
            }
        );
    };
    handleSelect

    getTree = id =>{
        let product = 0;
        if(id<12){
            product = this.state.products.find(item => item.id === id);    
        }else{
            product = this.state.tools.find(item => item.id === id);  
        }
        return product;
    };

    handleClickedTree = id => {
        const clickedTree = this.getTree(id);
        this.setState(() => {
            return { clickedTree: clickedTree }
        })
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getTree(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.quantity++;

        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] };
            },
            () => {
                this.getTotal();
            }
        );
    };
    getTool = id =>{
        const product = this.state.tools.find(item => item.id === id);
        return product;
    };

    addToolToCart = id => {
        let tempProducts = [...this.state.tools];
        const index = tempProducts.indexOf(this.getTool(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.quantity++;

        this.setState(
            ()=>{
                return {tools:tempProducts, cart:[...this.state.cart, product]};
            }, 
            ()=>{
                this.getTotal();
            }
        );
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.quantity++;

        this.setState(() => { return { cart: [...tempCart] } }, () => { this.getTotal() })

    };
    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        if (product.quantity === 0) {
            this.removeItem(id);
        } else {
            product.quantity--;
            this.setState(() => { return { cart: [...tempCart] } }, () => { this.getTotal() });
        }
    };

    removeItem = id =>{
        let tempObjects = 0;
        
        if(id<(12)){
            tempObjects = [...this.state.products];    
        } else{
            tempObjects = [...this.state.tools]; 
        }

        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempObjects.indexOf(this.getTree(id));
        let removedProduct = tempObjects[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;

        if(id<(12)){
            this.setState(()=>{
                return {
                    cart:[...tempCart],
                    products:[...tempObjects]
                }
            },()=>{
                this.getTotal();
            })  
        } else{
            this.setState(()=>{
                return {
                    cart:[...tempCart],
                    tools:[...tempObjects]
                }
            },()=>{
                this.getTotal();
            })
        }
    };
    emptyCart = id => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.getTotal();
        });
    };

    getTotal = () => {
        let calcTotal = 0;
        this.state.cart.map(item => (calcTotal += (item.price * item.quantity)));
        this.setState(() => {
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
                emptyCart: this.emptyCart,
                sortByPrice: this.sortByPrice,
                sortByName: this.sortByName,
                sortByCategory: this.sortByCategory,
                sortBySoil: this.sortBySoil,
                sortBySun: this.sortBySun,
                sortByHeight: this.sortByHeight,
                addToolToCart: this.addToolToCart,
                getTool: this.getTool,
                sortToolsByName: this.sortToolsByName,
                sortToolsByPrice: this.sortToolsByPrice,
            }}>
                {this.props.children}
            </TreesContext.Provider>
        )
    }
}

const TreesConsumer = TreesContext.Consumer;

export { TreesProvider, TreesConsumer }