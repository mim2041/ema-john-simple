import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, ratings, seller, price} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Products;