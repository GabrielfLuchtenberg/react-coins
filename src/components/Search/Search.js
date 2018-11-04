import React, { Component } from 'react';
import { cryptoApi } from '../../http';
import { Loading } from '../';
import './Search.css'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            loading: false,
            searchResults: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const searchQuery = event.target.value
        this.setState({ searchQuery, loading: true })
        if (!searchQuery) {
            this.setState({ loading: false })
            return ''
        }
        cryptoApi.get(`autocomplete?searchQuery=${searchQuery}`)
            .then(searchResults => this.setState({ searchResults, loading: false }))
    }
    render () {
        const { loading } = this.state
        return (
            <div className="search-container">
                <span className="search-icon" />
                <input name="searchQuery" onChange={this.handleChange} placeholder="Search..." />
                {
                    loading && <div className="loading-search-container"><Loading height="12px" width="12px" /></div>
                }
            </div>
        );
    }
}

export default Search;
