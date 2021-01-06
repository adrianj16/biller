import React, { Component } from 'react';

class Category extends Component {
    render() {
        var category = this.props.data;
        return (
            <div className="col-md-4 col-xs-6">
                <div className="shop" key={category.id}>
                    <div className="shop-img">
                        <img src={process.env.PUBLIC_URL + category.img} alt=""/>
                    </div>
                    <div className="shop-body">
                        <h3>{category.title}<br />{category.subtitle}</h3>
                        <a href={category.action.link} className="cta-btn">{category.action.label} <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;