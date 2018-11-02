import React, { Component } from 'react';
import './App.css';

import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound, Detail, Table } from './components'
class App extends Component {

  render () {

    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Switch>
                <Route path="/" component={Table} exact />
                <Route path="/currency/:id" component={Detail} exact />
                <Route component={NotFound} exact />
              </Switch>
            </header>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
