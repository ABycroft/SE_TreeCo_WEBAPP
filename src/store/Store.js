import React, { Component } from 'react';
import TreeList from "./TreeList";
import './store.css';
import { TreesConsumer } from '../context';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Store extends Component {

    handleClick = () => {
        console.log('Retrieved the value: ', this.eventKey);
    }

    render() {
        return (
            <div className="title">
                <h2>Tree Products</h2>
                <TreesConsumer>
                    {(value) => (
                        <div className="text-right">
                            <button className="btn btn-green mx-1" onClick={value.sortByPrice} variant="light">Sort by Price</button>
                            <button className="btn btn-green mx-1" onClick={value.sortByName} variant="light">Sort by Name</button>

                            <DropdownButton id="filterButton" class="btn mx-1" title="Filter by Category" onClick={this.handleClick} >
                                <Dropdown.Header> Tree Category</Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={"NZ Native"} onClick={value.sortByCategory("NZ Native")}> NZ Native</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Evergreen"} onClick={value.sortByCategory("Evergreen")}> Evergreen</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Decidious"} onClick={value.sortByCategory("Decidious")}> Decidious</Dropdown.Item>
                                <Dropdown.Header> Soil Requirements </Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={"Moderate"} onClick={value.sortBySoil}> Moderate</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Moist"} onClick={value.sortBySoil}> Moist</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Drained"} onClick={value.sortBySoil}> Drained </Dropdown.Item>
                                <Dropdown.Header> Sun Requirements</Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={"Full"} onClick={value.sortBySun}> Full sun</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Moderate"} onClick={value.sortBySun}> Moderate sun</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={"Semi"} onClick={value.sortBySun}> Semi shade</Dropdown.Item>
                                <Dropdown.Header> Maximum Height</Dropdown.Header>
                                <Dropdown.Item as="button" eventKey={10} onClick={value.sortmaxHeight}> 5 - 10m</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={11} onSelect={value.sortmaxHeight}> 11 - 20m</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={12} onClick={value.sortmaxHeight}> 20+ m</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    )}
                </TreesConsumer>
                <TreeList />
            </div>
        )
    }
}

export default Store
