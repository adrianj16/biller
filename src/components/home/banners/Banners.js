import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Banners extends Component {
    render() {
        return (
            <Carousel autoPlay={3000} infinite={true}>
                <img src={process.env.PUBLIC_URL + "assets/img/product01.png"} />
                <img src={process.env.PUBLIC_URL + "assets/img/product02.png"} />
                <img src={process.env.PUBLIC_URL + "assets/img/product03.png"} />
            </Carousel>
        );
    }
}

export default Banners;