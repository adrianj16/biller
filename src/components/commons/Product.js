import React, { Component } from 'react';

class Product extends Component {
    render() {
        var product = this.props.data;
        return (
            <div className="product">
                <div className="product-img">
                    <img src={process.env.PUBLIC_URL + product.img} alt="" />
                    <div className="product-label">
                        <span className="sale" hidden={product.discount.visible}>{product.discount.percent}%</span>
                        <span className="new" hidden={product.new}>NEW</span>
                    </div>
                </div>
                <div className="product-body">
                    <p className="product-category">{product.category.title}</p>
                    <h3 className="product-name"><a href="#">{product.title}</a></h3>
                    <h4 className="product-price">${product.price} <del className="product-old-price">${product.old_price}</del></h4>
                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                    </div>
                </div>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
        );
    }
}

export default Product;

