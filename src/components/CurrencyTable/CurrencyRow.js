import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { renderChangePercent } from '../../helpers'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'



const CurrencyRow = (props) => {
    const { currency, history } = props
    return (    
        <TableRow onClick={() => history.push(`/currency/${currency.id}`)} hover>
            <TableCell>{currency.rank} {currency.name}</TableCell>
            <TableCell> {currency.price} USD</TableCell>
            <TableCell>{renderChangePercent(currency.percentChange24h)}</TableCell>
            <TableCell>{currency.marketCap} USD</TableCell>
        </TableRow>
    )
}
CurrencyRow.propTypes = {
    currency: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
export default withRouter(CurrencyRow)