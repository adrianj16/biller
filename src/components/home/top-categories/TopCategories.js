import React, { Component } from 'react';
import Category from './Category';

class TopCategories extends Component {
  render() {
    var mock = require('../../../mocks/top-categories.json');
    console.log(mock);
    var categories = [];
    mock.forEach(element => categories.push(<Category data={element}/>));
    return (
		<div className="section">
			<div className="container">
				<div className="row">
				    {categories}
				</div>
			</div>
		</div>
    );
  }
}

export default TopCategories;