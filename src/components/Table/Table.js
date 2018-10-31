import React from 'react'
const Table = (props)=>{

    const {currencies}=props
    return(
        <table>
            {
                currencies.map(i =>
                    <tr>{i.id}</tr>
                )
            }
        </table>
    )
}

export default Table