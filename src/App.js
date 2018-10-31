import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Http from './http'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      currencies: [],
      errors: false,
    }
  }
  componentDidMount () {
    Http.get('cryptocurrencies')
      .then(res => this.setState({ currencies: res.currencies, loading: false }))
      .catch(e => this.setState({ errors: e.errorMessage, loading: false }))
  }
  render () {
    const { loading, currencies, errors } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn React
          </a>

          {
            currencies.map(i => <p>{i.id}</p>)
          }
        </header>
      </div>
    );
  }
}

export default App;
