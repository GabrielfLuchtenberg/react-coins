import React from 'react'
import PropTypes from 'prop-types'
import Body  from './Body'
import Head from './Head';
const Table = (props)=>{
    const {currencies,loading,errors}=props
    if(loading){
        return  <p>Loading...</p>
    }
    if(errors){
        return <div>{errors}</div>
    }
    return(
        <table style={{
            width:'100%'
        }}>
            <Head/>
            <Body currencies={currencies}/>
        </table>
    )
}

Table.propTypes ={
    currencies : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    
}

export default Table