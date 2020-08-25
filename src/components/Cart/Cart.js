import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prod) => total + prod.price, 0) 
    
    // or
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total +  product.price
        
    }

    let shipping = 0;
    if(total >35){
        shipping = 0;
    } else if(total>15){
        shipping = 4.99;
    } else if (total>0) {
        shipping = 12.99
    }

    const tax = Math.round(total/10); //10% of total

    return (
        <div>
           <h4>Order Summery  </h4> 
           <p>Items ordered: {cart.length} </p>
           <p>Product Price:{total}</p>
           <p><small>Shipping Cost: {shipping}</small></p>
           <p>Total Price : {total + shipping}</p>
        </div>
    );
};

export default Cart;