import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { renderChangePercent } from '../../helpers'
const TBody = (props) => {
    const { currencies, history } = props

    return (
        <tbody >
            {
                currencies.map((i) =>
                    <tr key={i.id} onClick={() => history.push(`/currency/${i.id}`)}>
                        <td>{i.rank} {i.name}</td>
                        <td> {i.price} USD</td>
                        <td>{renderChangePercent(i.percentChange24h)}</td>
                        <td>{i.marketCap} USD</td>
                    </tr>
                )
            }
        </tbody>
    )
}
TBody.propTypes = {
    currencies: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
}
export default withRouter(TBody)
