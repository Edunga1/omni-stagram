import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import queryString from 'query-string';

const DEFAULT_SEARCH = 'instagram';

export default class SearchBox extends Component {
  constructor() {
    super();
    this.onChangeSnsIdSource = new Subject();
    this.defaultSearch = queryString.parse(window.location.search).q || DEFAULT_SEARCH;
  }

  componentDidMount() {
    const { onChange } = this.props;
    this.onChangeSnsIdSource.pipe(
      startWith(this.defaultSearch),
    ).subscribe((query) => {
      onChange(query);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.defaultSearch}
          onChange={e => this.onChangeSnsIdSource.next(e.target.value)}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
