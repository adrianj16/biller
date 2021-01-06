import React, { Component } from 'react';
import Product from '../../commons/Product'

class Products extends Component {
    render() {
        var mock = require('../../../mocks/products-store.json');
        var products = [];
        mock.forEach(element => {
            products.push(<div className="col-md-4 col-xs-6"><Product data={element} /></div>);
        });
        return (
            <div>
                {products}
            </div>
        );
    }
}

export default Products;
