import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const { page, totalPages, handlePaginationClick } = this.props
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePaginationClick('prev')}
          disabled={page <= 1}
          type="button"
        >
          &larr;
        </Button>
        <span className="pagination"><b>{page}</b> of <b>{totalPages}</b> </span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePaginationClick('next')}
          disabled={page > totalPages - 1}
          type="button"
        >
          &rarr;
          </Button>
      </div>
    );
  }
}

Pagination.propTypes = {
  handlePaginationClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

}

export default Pagination;