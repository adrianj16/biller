import React, { Component } from 'react';
import Product from '../commons/Product';

class RelatedProducts extends Component {
	render() {
		var products = [];
        this.props.data.forEach(element => products.push(<div class="col-md-3 col-xs-6"><Product data={element} /></div>));
        return (<div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h3 class="title">Related Products</h3>
                    </div>
                </div>
                {products}
            </div>
        </div>
    </div>		);
	}
}

export default RelatedProducts;