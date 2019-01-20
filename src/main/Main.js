import React, { Component } from 'react';
import { combineLatest, Subject } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  startWith,
  tap,
} from 'rxjs/operators';
import './Main.css';
import MasonryLayout from '../content/MasonryLayout';
import InstagramRepository from '../services/InstagramRepository';
import ScrollEndEvent from './ScrollEndEvent';
import SearchBox from './SearchBox';

class Main extends Component {
  state = {
    items: [],
  }

  constructor() {
    super();
    this.repository = new InstagramRepository();
    this.onSearchBoxChangeSource = new Subject();

    const onSearchBoxChange$ = this.onSearchBoxChangeSource.pipe(
      debounceTime(1000),
    );
    const onScrollEnd$ = new ScrollEndEvent(window).pipe(
      startWith(null),
    );
    let isPending = false;

    combineLatest(
      onSearchBoxChange$,
      onScrollEnd$,
    ).pipe(
      filter(() => !isPending),
      map(arr => arr[0]),
      filter(query => !!query),
      tap(() => { isPending = true; }),
      map(query => [
        this.repository.setInstagramId(query),
        this.repository.nextMedias(),
      ]),
    ).subscribe(async (results) => {
      const isUpdate = results[0];
      const newItems = (await results[1]).map(media => ({
        id: media.id,
        src: media.tumbnailSrc,
      }));
      const { items: oldItems } = this.state;
      const items = isUpdate
        ? newItems
        : oldItems.concat(newItems);
      this.setState({ items });
      isPending = false;
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="Main">
        <SearchBox onChange={id => this.onSearchBoxChangeSource.next(id)} />
        <MasonryLayout items={items} />
      </div>
    );
  }
}

export default Main;
