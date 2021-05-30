import React, { Component } from 'react';
import Header from './components/shared/Header';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import Newsletter from './components/shared/Newsletter';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Home/>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
