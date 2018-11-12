import React, { Component } from 'react';
import { CurrencyTable, Loading } from '../components'
import { cryptoApi } from '../http';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            currencies: [],
            errors: false,
            totalPages: 1,
            page: 1,
            rowsPerPage: 10
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    fetchCurrencies () {
        this.setState({
            loading: true
        })
        const { page,rowsPerPage } = this.state
        
        cryptoApi.get(`cryptocurrencies?page=${page}&perPage=${rowsPerPage}`)
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

    handlePaginationClick (e,page) {
        page += 1
        this.setState({ page  }, () => this.fetchCurrencies())
    }

    onChangeRowsPerPage = e =>{
        this.setState({rowsPerPage: e.target.value},()=> this.fetchCurrencies())
    }

    render () {
        const { loading, currencies, errors, page, totalPages,rowsPerPage } = this.state;
        if (loading) {
            return <section ><div className="loading-container"><Loading /> </div></section>
        }
        if (errors) {
            return <div>{errors}</div>
        }
        return (
            <section style={{ paddingTop: '15px',width:"60%" }}>
                <CurrencyTable 
                    currencies={currencies} 
                    rowsPerPage={rowsPerPage}
                    page={page -1 }
                    totalPages={totalPages}
                    onChangePage={this.handlePaginationClick}
                    onChangeRowsPerPage={this.onChangeRowsPerPage}
                />
            </section>
        );
    }
}

export default HomeScreen
