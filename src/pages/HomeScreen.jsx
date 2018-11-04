import React, { Component } from 'react';
import { Table, Pagination, Loading } from '../components'
import { cryptoApi } from '../http';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            currencies: [],
            errors: false,
            totalPages: 1,
            page: 1
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    fetchCurrencies () {
        this.setState({
            loading: true
        })
        const { page } = this.state
        const perPage = 10
        cryptoApi.get(`cryptocurrencies?page=${page}&perPage=${perPage}`)
            .then(res => {
                const { currencies, totalPages } = res
                this.setState({
                    currencies,
                    totalPages,
                    loading: false
                })
            }
            )
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
        if (loading) {
            return <section><div className="loading-container"><Loading /> </div></section>
        }
        if (errors) {
            return <div>{errors}</div>
        }
        return (
            <section style={{ paddingTop: '15px' }}>
                <Table currencies={currencies} />
                <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick} />
            </section>
        );
    }
}

export default HomeScreen
