import React, { Component } from 'react';
import Product from '../Product';

class Category extends Component {
    render() {
        var category = this.props.data;
        var products = [];
        category.products.forEach(element => products.push(<Product data={element} />));
        return (
            <div id={"tab"+category.id} className={this.props.first ? 'tab-pane active' : 'tab-pane'}>
                <div className="products-slick" data-nav={"#slick-nav"+category.id}>
                    {products}
                </div>
                <div id={"slick-nav"+category.id} className="products-slick-nav"></div>
            </div>
        );
    }
}

export default Category;
