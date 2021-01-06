import React, { Component } from 'react';
import Category from './Category';

class NewProducts extends Component {
	render() {
		var mock = require('../../../mocks/new-products.json');
		var categories = [];
		for(var i=0; i<mock.length;i++){
			categories.push(<Category data={mock[i]} first={i==0} />);
		}
		var tabs = [];
		mock.forEach(element => tabs.push(<li><a data-toggle="tab" href={"#tab"+element.id}>{element.title}</a></li>));
		return (
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h3 className="title">{this.props.title}</h3>
								<div className="section-nav">
									<ul className="section-tab-nav tab-nav">
										{tabs}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="row">
								<div className="products-tabs">
									{categories}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewProducts;