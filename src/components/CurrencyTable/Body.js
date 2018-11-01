import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
const TBody = (props) => {


    const { currencies, history } = props
    return (
        <tbody  >
            {
                currencies.map((i) =>
                    <tr key={i.id} onClick={() => history.push(`/currency/${i.id}`)}>
                        <td> >{i.rank} {i.name}</td>
                        <td>{i.price}</td>
                    </tr>
                )
            }
        </tbody>
    )
}
TBody.porpTypes = {
    currencies: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
}
export default withRouter(TBody)