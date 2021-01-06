import React, { Component } from 'react';
import Breadcrumb from './breadcrumb/Breadcrump';
import AsideFilters from './aside-filters/AsideFilters';
import Sort from './sort/Sort';
import Products from './products/Products';
import Pagging from './pagging/Pagging';

class Store extends Component {
    render() {
        return (
            <div>
                <Breadcrumb />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <AsideFilters />
                            <div id="store" className="col-md-9">
                                <Sort />
                                <div className="row">
                                    <Products />
                                </div>
                                <Pagging />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Store;