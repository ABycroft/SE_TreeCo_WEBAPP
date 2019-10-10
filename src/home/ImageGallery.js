import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://www.icontrees.co.nz/ic/2859129367/Podocarpus%20Henkelii%20tree.JPG',
    thumbnail: 'https://www.icontrees.co.nz/ic/2859129367/Podocarpus%20Henkelii%20tree.JPG',
  },
  {
    original: 'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Red-Dragon-Japanese-Maple-50w_grande.jpg?v=1549677963',
    thumbnail: 'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Red-Dragon-Japanese-Maple-50w_grande.jpg?v=1549677963',
  },
  {
    original: 'https://images-na.ssl-images-amazon.com/images/I/61S%2BLF61WSL._SX466_.jpg',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61S%2BLF61WSL._SX466_.jpg',
  },
];

class MyGallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;