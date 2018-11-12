import Body from './Body'
import Head from './Head';
import React from 'react';
import PropTypes from 'prop-types'
import './Table.css'
const Table = (props) => {
    const { currencies } = props;
    return <table >
        <Head />
        <Body currencies={currencies} />
    </table>
}

Table.propTypes = {
    currencies: PropTypes.array.isRequired
}

export default Table;