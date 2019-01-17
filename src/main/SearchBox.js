import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

const DEFAULT_SEARCH = 'instagram';

export default class SearchBox extends Component {
  constructor() {
    super();
    this.onChangeSnsId$ = new Subject();
  }

  componentDidMount() {
    const { onChange } = this.props;
    this.onChangeSnsId$.pipe(
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
          onChange={e => this.onChangeSnsId$.next(e.target.value)}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
