import React, { Component } from 'react';
import { cryptoApi } from '../../http';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: {},
            loading: false,
            error: null
        };
    }
    componentDidMount () {
        const currencyId = this.props.match.params.id
        this.setState({ loading: true })
        cryptoApi.get(`cryptocurrencies/${currencyId}`)
            .then(res => this.setState({ currency: res, loading: false, error: null }))
            .catch(e => this.setState({ error: e.errorMessage, loading: false, currency: null }))
    }
    render () {
        const { error, currency, loading } = this.state
        if (error) {
            return <p> {error}</p>
        }
        return (
            <section>
                <p> Detail</p>
                <p>
                    {loading ? 'Loading.. ' : currency.name}
                </p>
            </section>
        );
    }
}

export default Detail;
