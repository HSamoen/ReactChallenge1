//Exercise 4: Passing Data via "props"
//output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.

import React from 'react';


function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}

export default Product;
//Product.js is the child component of App.js--->
//props defined in Product.js can be passed/ used in App.js
//props allows for output of dynamic data

//to use props--> props should be passed in as an argument in our Product function
//replace title, price, and description with {{props.title}}, {{props.price}}, {{props.description}} so that it can be used and defined in App.js