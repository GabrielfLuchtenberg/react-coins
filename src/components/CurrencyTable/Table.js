import Body from './Body'
import Head from './Head';
import React, { Component } from 'react';
import { cryptoApi } from '../../http'
import { Pagination } from '../'

class Table extends Component {
    constructor() {
        super()

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

        if (errors) {
            return <div>{errors}</div>
        }
        return (
            <section>
                <table style={{
                    width: '100%'
                }}>
                    <Head />
                    {
                        loading ? <p>Loading...</p> : <Body currencies={currencies} />
                    }

                </table>
                <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick} />
            </section>
        );
    }
}

export default Table;