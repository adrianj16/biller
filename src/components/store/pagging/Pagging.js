import React, { Component } from 'react';

class Pagging extends Component {
    render() {
        return (
            <div className="store-filter clearfix">
                <span className="store-qty">Showing 20-100 products</span>
                <ul className="store-pagination">
                    <li className="active">1</li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
            </div>
        );
    }
}

export default Pagging;
