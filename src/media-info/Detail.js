import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Detail.css';
import Comment from './Comment';

export default class Detail extends Component {
  render() {
    const {
      text,
      timestamp,
      userId,
      userProfileSrc,
      mediaSrc,
      comments,
    } = this.props;
    const elmComments = comments.map((c, i) => (
      <Comment
        key={i.toString()}
        text={c.text}
        timestamp={c.timestamp}
        userId={c.userId}
        userProfileSrc={c.userProfileSrc}
      />
    ));
    return (
      <div className="Detail">
        <div className="body">
          <img className="img-main" src={mediaSrc} alt="media" />
          <Comment
            text={text}
            timestamp={timestamp}
            userId={userId}
            userProfileSrc={userProfileSrc}
          />
          <div className="box-comments">
            {elmComments}
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  text: PropTypes.string.isRequired,
  mediaSrc: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  userProfileSrc: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      userId: PropTypes.string.isRequired,
      userProfileSrc: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
