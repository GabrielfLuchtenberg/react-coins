import React, { Component } from 'react'
import { cryptoApi } from '../../http'
import { Table, Pagination } from '../'


export class List extends Component {
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
        const { page } = this.state
        cryptoApi.get(`cryptocurrencies?page=${page}`)
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

        return (
            <div style={{ width: '100%' }}>
                <Table loading={loading} currencies={currencies} errors={errors} />
                <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick} />
            </div>
        )
    }
}

export default List