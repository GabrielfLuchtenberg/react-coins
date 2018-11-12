import React from 'react';
import PropTypes from 'prop-types'
import Table from "@material-ui/core/Table";
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CurrencyRow  from './CurrencyRow'
import { TablePagination } from '@material-ui/core';

const styles = theme => ({
    root: {
        width:'100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: '700px',
    }
})

const CurrencyTable = (props) => {
    const { currencies, rowsPerPage,page,totalPages,onChangePage,onChangeRowsPerPage } = props;
    return <Paper className={styles.root}>
        <Table className={styles.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell>Last price</TableCell>
                    <TableCell>24h Change</TableCell>
                    <TableCell>Market cap</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    currencies.map( c => <CurrencyRow currency={c} key={c.id} />)
                }
            </TableBody>
        </Table>
        
        <TablePagination 
            component="div"
            rowsPerPage={rowsPerPage}
            page={page}
            count={totalPages}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
        />
    </Paper>
}

CurrencyTable.propTypes = {
    currencies: PropTypes.array.isRequired
}

export default CurrencyTable;