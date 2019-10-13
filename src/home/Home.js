import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Carousel } from 'react-bootstrap'

/**
 * This is a page component.
 * Just another component that holds more components.
 * In app.js we are using react-router-dom to switch these page components.
 */
class Home extends Component {
    render() {
        return (
            <div className='home-content'>
                <h2>Welcome to PlantATree</h2>
                <p>Find and purchase trees to suit your situation, without the hassle. Check out our large selection of trees and gardening items.</p>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block imgs"
                            src="trees/yellowwood.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Find the perfect tree for your needs!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block imgs"
                            src="trees/Japanese_Maple.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h4>Need something easy?</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block imgs"
                            src="trees/japanese_cherry.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h4>Brighten up your garden!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block imgs"
                            src="trees/oak_tree.jpg"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h4>Plan for the future</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel><p className="pt-3"> We offer pick up and delivery!</p>
                <Link to="/store" >
                    <button className="btn btn-green mx-1 mb-4 " variant="light">Start Shopping!</button>
                </Link>
            </div >
        )
    }
}

export default Home
