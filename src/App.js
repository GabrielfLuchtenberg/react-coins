import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { HomeLayout } from './layouts'
import 'typeface-roboto';
class App extends Component {

  render () {

    return (
      <BrowserRouter>
        <HomeLayout />
      </BrowserRouter>
    );
  }
}

export default App;
