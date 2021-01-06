import React, { Component } from 'react';

class Product extends Component {
    render() {
        var product = this.props.data;
        return (
            <div className="product-widget">
                <div className="product-img">
                    <img src={process.env.PUBLIC_URL + product.img} alt="" />
                </div>
                <div className="product-body">
                    <p className="product-category">{product.category.title}</p>
                    <h3 className="product-name"><a href="#">{product.title}</a></h3>
                    <h4 className="product-price">${product.price}<del className="product-old-price">${product.old_price}</del></h4>
                </div>
            </div>
        );
    }
}

export default Product;