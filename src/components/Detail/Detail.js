import React, { Component } from 'react';
import { Paper, Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';

const styles = theme => ({

    label: {
        fontWeight: 'bold',

    }
});
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: {},
            loading: false,
            error: null
        };
    }

    render () {
        const { currency, classes } = this.props

        return (
            <Paper>
                <Card className={classes.card}>
                    <CardHeader title={`${currency.rank} ${currency.symbol} - ${currency.name}`} />
                    <CardContent>
                        <Typography component='p' >
                            <span className={classes.label}>Price: </span> {currency.price}
                        </Typography>
                        <Typography component='p'>
                            <span className={classes.label}> 24h change:</span> {currency.percentChange24h}
                        </Typography>
                        <Typography component='p'>
                            <span className={classes.label}>Makert Cap: </span>{currency.marketCap}
                        </Typography>

                        <Typography component='p'>
                            <span className={classes.label}>Total Supply:</span> {currency.totalSupply}
                        </Typography>
                        <Typography component='p'>
                            <span className={classes.label}>Volume change (24h):</span> {currency.volume24h}
                        </Typography>
                    </CardContent>
                </Card>

            </Paper>
        );
    }
}

export default withStyles(styles)(Detail);
