import React, { Component } from 'react';
import TopCategories from './top-categories/TopCategories';
import NewProducts from './new-products/NewProducts';
import Banners from './banners/Banners'
import HotDeal from './hot-deal/HotDeal';
// import TopSelling from './top-selling/TopSelling';

class Home extends Component {
    render() {
        return (
            <div>
                <Banners />
                <TopCategories />
                <NewProducts title="New Products" />
                <HotDeal />
                <NewProducts title="Top Selling" />
            </div>
        );
    }
}

export default Home;
