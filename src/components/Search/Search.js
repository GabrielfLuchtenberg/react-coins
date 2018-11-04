import React, { Component } from 'react';
import { cryptoApi } from '../../http';
import './Search.css'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        const searchQuery = event.target.value
        this.setState({ searchQuery })
        if (!searchQuery) {
            return ''
        }
        cryptoApi.get(`autocomplete?searchQuery=${searchQuery}`)
            .then(res => console.log(res))
    }
    render () {
        return (
            <div className="search-container">
                <span className="search-icon" />
                <input name="searchQuery" onChange={this.handleChange} placeholder="Search..." />
            </div>
        );
    }
}

export default Search;
