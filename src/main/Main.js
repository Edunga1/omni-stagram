import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { map, switchMap, debounceTime } from 'rxjs/operators';
import './Main.css';
import SearchBox from './SearchBox';
import MasonryLayout from '../content/MasonryLayout';
import InstagramRepository from './InstagramRepository';

class Main extends Component {
  state = {
    items: [],
  }

  constructor() {
    super();
    this.$repository = new InstagramRepository();
    this.onSearchBoxChange$ = new Subject();
    this.onSearchBoxChange$.pipe(
      debounceTime(1000),
      switchMap(query => this.$repository.setInstagramId(query).nextMedias()),
      map(response => response.medias.map(media => ({
        id: media.id,
        src: media.tumbnailSrc,
      }))),
    ).subscribe((items) => {
      this.setState({ items });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="Main">
        <SearchBox onChange={id => this.onSearchBoxChange$.next(id)} />
        <MasonryLayout items={items} />
      </div>
    );
  }
}

export default Main;
