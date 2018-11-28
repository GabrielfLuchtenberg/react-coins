import React, { Component } from 'react';
import { cryptoApi } from "../http";
import { Detail } from '../components';
class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: {},
            loading: false,
            error: null
        };
    }
    fetchCurrencies(currencyId){
        this.setState({ loading: true })
        cryptoApi.get(`cryptocurrencies/${currencyId}`)
            .then(res => this.setState({ currency: res, loading: false, error: null }))
            .catch(e => this.setState({ error: e.errorMessage, loading: false, currency: null }))
    }
    componentDidMount () {
        const currencyId = this.props.match.params.id
        this.fetchCurrencies(currencyId)
        
    }
    componentWillReceiveProps(nextProps){
        if(this.props.location.pathname !== nextProps.location.pathname){
            const newCurrencyId = nextProps.match.params.id
            this.fetchCurrencies(newCurrencyId)
        }
    
    }
    render () {
        const { error, currency, loading } = this.state
        if (error) {
            return <p> {error}</p>
        }
        if (loading) {
            return <p>Loading..</p>
        }
        return <Detail style={{ paddingTop: '15px', width: "75%" }} currency={currency} />
    }
}
export default DetailScreen