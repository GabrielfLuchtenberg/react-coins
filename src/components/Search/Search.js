import React, { Component } from 'react';
import { cryptoApi } from '../../http';
import { Paper, TextField, MenuItem, withStyles } from '@material-ui/core'
import './Search.css'
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Autosuggest from 'react-autosuggest';
import {withRouter} from 'react-router-dom'

const styles = theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 2,
        marginTop: theme.spacing.unit,
        maxHeight: '350px',
        overflowY: 'auto',
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        zIndex: 1,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});
// function 
// function 
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            loading: false,
            searchResults: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.renderInputComponent = this.renderInputComponent.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this)
        this.renderSuggestion = this.renderSuggestion.bind(this)
    }

    handleClickSearch  (currencyId){
        //clear references
        this.setState({
            searchQuery: '',
            loading: false,
            searchResults: []
        })
        this.props.history.push(`/currency/${currencyId}`)
    }

    renderSuggestion = (currency, { query, isHighlighted }) => {
        const matches = match(currency.name, query);
        const parts = parse(currency.name, matches);

        return (
            <MenuItem selected={isHighlighted} component="div" onClick={() => this.handleClickSearch(currency.id)} >
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 300 }}>
                                {part.text}
                            </strong>
                        );
                })}
            </MenuItem>
        );
    }
    onChange = (event, { newValue }) => {
        this.setState({
            searchQuery: newValue
        });
    };

    handleChange ({ value }) {
        this.setState({ loading: true })
        if (!value) {
            this.setState({ loading: false, searchResults: [] })
        }
        cryptoApi.get(`autocomplete?searchQuery=${value}`)
            .then(searchResults => this.setState({ searchResults, loading: false }))
    }
    handleClear () {
        this.setState({ loading: false, searchResults: [] })
    }
    renderInputComponent (inputProps) {
        const { classes, inputRef = () => { }, ref, ...other } = inputProps;
        return (
            <TextField
                fullWidth
                InputProps={{
                    inputRef: node => {
                        ref(node);
                        inputRef(node);
                    },
                    classes: {
                        input: classes.input,
                    },
                }}
                {...other}
            />
        );
    }
    render () {
        const { classes } = this.props
        const { loading, searchQuery, searchResults } = this.state
        const inputProps = {
            placeholder: 'Find a coin',
            value: searchQuery,
            classes,
            onChange: this.onChange
        }
        const getSuggestionValue = item => item.name
        
        const autosuggestProps = {
            renderInputComponent: this.renderInputComponent,
            suggestions: searchResults,
            onSuggestionsFetchRequested: this.handleChange,
            onSuggestionsClearRequested: this.handleClear,
            getSuggestionValue: getSuggestionValue,
            renderSuggestion: this.renderSuggestion
        };
        return (
            <div className={classes.root}>
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={inputProps}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={options => (
                        <Paper {...options.containerProps} square>
                            {options.children}
                        </Paper>
                    )}
                />
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Search));
