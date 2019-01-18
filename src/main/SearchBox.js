import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

const DEFAULT_SEARCH = 'instagram';

export default class SearchBox extends Component {
  constructor() {
    super();
    this.onChangeSnsIdSource = new Subject();
  }

  componentDidMount() {
    const { onChange } = this.props;
    this.onChangeSnsIdSource.pipe(
      startWith(DEFAULT_SEARCH),
    ).subscribe((query) => {
      onChange(query);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={DEFAULT_SEARCH}
          onChange={e => this.onChangeSnsIdSource.next(e.target.value)}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
