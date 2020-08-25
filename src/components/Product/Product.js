import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>

                <button className = "main-btn" onClick = {() => props.handleAddProduct (props.product)}> 
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart
                </button>

            </div>
        </div>

    );
};

export default Product;