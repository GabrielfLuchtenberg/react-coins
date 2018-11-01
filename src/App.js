import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { cryptoApi } from './http'
import { Table, Pagination } from './components'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      currencies: [],
      errors: false,
      totalPages: 1,
      page: 1
    }
  }

  fetchCurrencies () {
    const { page } = this.state
    cryptoApi.get(`cryptocurrencies?page=${page}`)
      .then(res => this.setState({
        currencies: res.currencies,
        loading: false,
        totalPages: res.totalPages
      }))
      .catch(e => this.setState({
        errors: e.errorMessage,
        loading: false
      }))
  }

  componentDidMount () {
    this.fetchCurrencies()
  }

  handlePaginationClick (direction) {
    let nextPage = this.state.page
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1
    this.setState({ page: nextPage }, () => this.fetchCurrencies())
  }
  render () {
    const { loading, currencies, errors, page, totalPages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table loading={loading} currencies={currencies} errors={errors} />
          <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick} />
        </header>

      </div>
    );
  }
}

export default App;
