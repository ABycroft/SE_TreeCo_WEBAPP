import React, { Component } from 'react'
import { treesData, clickedTree } from "./data";

const TreesContext = React.createContext();
//Provider
//Consumer

class TreesProvider extends Component {
    state = {
        products: [],
        cart: [],
        clickedTree: clickedTree,
        cartTotal: 0,
        orderedByPriceLowtoHigh: false,
        orderedByNameLowtoHigh: false,
        orderedByCategory: false,
        orderedBySoil: false,
        orderedBySun: false,
        orderedByHeight: false
    };
    componentDidMount() {
        this.setProducts();
    };
    // changed before https://youtu.be/wPQ1-33teR4?t=10055
    setProducts = () => {
        let tempProducts = [];
        treesData.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })

    };

    sortByPrice = () => {
        // called in add to cart onClick

        let tempProducts = [...this.state.products];

        if (this.state.orderedByPriceLowtoHigh) {
            tempProducts.sort((a, b) => b.price - a.price)
        } else {
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
    sortByName = () => {
        // not called atm

        let tempProducts = [...this.state.products];
        console.log(tempProducts);

        if (this.state.orderedByNameLowtoHigh) {
            tempProducts.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        } else {
            tempProducts.sort((a, b) => {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            })
        }

        console.log(tempProducts);
        console.log("done");

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    orderedByNameLowtoHigh: !this.state.orderedByNameLowtoHigh
                }
            }
        );
    };
    handleSelect

    //TODO
    sortByCategory = (value) => {
        let tempProducts = [...this.state.products];
        console.log(tempProducts);
        //if the Decidious button is selected, it will return its name will find a match


        console.log(tempProducts);
        console.log("done");

        this.setState(
            (value) => {
                if (value === "NZ Native") {
                    tempProducts.includes("NZ Native");
                    return {
                        products: tempProducts,
                        orderedByCategory: this.state.orderedByCategory
                    }
                }
            }
        );
    }
    sortBySoil = (e) => {
        let tempProducts = [...this.state.products];
        console.log(tempProducts);
        //if the Decidious button is selected, it will return its name will find a match
        if (e === "Moderate") {
            tempProducts.includes("Moderate");

        } else if (e === "Moderate") {
            tempProducts.includes("Moderate");
        } else {
            tempProducts.includes("Decidious");
        }

        console.log(tempProducts);
        console.log("done");

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    orderedBySoil: !this.state.orderedBySoil
                }
            }
        );
    }

    sortBySun = (e) => {
        let tempProducts = [...this.state.products];
        console.log(tempProducts);
        //if the Decidious button is selected, it will return its name will find a match
        if (e === "Full") {
            tempProducts.includes("Full");

        } else if (e === "Moderate") {
            tempProducts.includes("Moderate");
        } else {
            tempProducts.includes("Semi");
        }

        console.log(tempProducts);
        console.log("done");

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    orderedByCategory: !this.state.orderedByCategory
                }
            }
        );
    }


    getTree = id => {
        const product = this.state.products.find(item => item.id === id);
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
    removeItem = id => {
        let tempTrees = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempTrees.indexOf(this.getTree(id));
        let removedProduct = tempTrees[index];
        removedProduct.inCart = false;
        removedProduct.quantity = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempTrees]
            }
        }, () => {
            this.getTotal();
        })
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
                sortByHeight: this.sortByHeight
            }}>
                {this.props.children}
            </TreesContext.Provider>
        )
    }
}

const TreesConsumer = TreesContext.Consumer;

export { TreesProvider, TreesConsumer }