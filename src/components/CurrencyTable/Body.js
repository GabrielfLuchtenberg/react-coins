import React from 'react'
import PropTypes from 'prop-types'
const TBody = (props)=>
<tbody  >
{
    props.currencies.map( (i) =>
        <tr key={i.id}>
            <td>{i.rank} {i.name}</td>
            <td>{i.price}</td>
        </tr>
    )
}
</tbody>

TBody.porpTypes ={
    currencies : PropTypes.array.isRequired
}
export default TBody