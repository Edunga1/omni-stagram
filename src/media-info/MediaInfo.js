import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { from } from 'rxjs';
import './MediaInfo.css';
import InstagramRepository from '../services/InstagramRepository';
import Detail from './Detail';

export default class MediaInfo extends Component {
  state = {
    isDone: false,
    text: '',
    mediaSrc: '',
    comments: [],
  }

  constructor(props) {
    super(props);
    this.onDetailFetch$ = from(
      new InstagramRepository(props.match.params.user).detail(props.match.params.media),
    );
  }

  componentDidMount() {
    this.onDetailFetch$.subscribe((detail) => {
      this.setState({
        isDone: true,
        text: detail.text,
        mediaSrc: detail.mediaSrc,
        comments: detail.comments,
      });
    });
  }

  render() {
    const {
      isDone,
      text,
      mediaSrc,
      comments,
    } = this.state;
    return (
      <div className="MediaInfo">
        {
          isDone
            ? (
              <Detail
                text={text}
                mediaSrc={mediaSrc}
                comments={comments.sort((a, b) => b.timestamp - a.timestamp)}
              />
            )
            : 'Loading...'
        }
      </div>
    );
  }
}

MediaInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      media: PropTypes.string,
      user: PropTypes.string,
    }),
  }).isRequired,
};
