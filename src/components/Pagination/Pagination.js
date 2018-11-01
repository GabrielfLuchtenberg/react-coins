import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <button
          onClick={() => handlePaginationClick('prev')}
          disabled={page <= 1}
          type="button"
        >
          &larr;
        </button>
        <span className="pagination"><b>{page}</b> of <b>{totalPages}</b> </span>
        <button
          onClick={() => handlePaginationClick('next')}
          disabled={page > totalPages - 1}
          type="button"
        >
          &rarr;
          </button>
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