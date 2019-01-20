import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import { interval } from 'rxjs';

const MS_SECOND = 1000;
const MS_MINUTE = 60000;
const MS_HOUR = 3600000;
const MS_DAY = 86400000;
const MS_SECONDS_CL = 60000;
const MS_MINUTES_CL = 3600000;
const MS_HOURS_CL = 86400000;
const MS_DAYS_CL = 2592000000;

export default class Comment extends Component {
  state ={
    commentCreatedAt: '',
  };

  constructor() {
    super();
    this.interval$ = interval(1000);
  }

  componentDidMount() {
    const { timestamp } = this.props;
    this.interval$.subscribe(() => {
      const now = new Date();
      const time = new Date(timestamp * 1000);
      const diff = now - time;
      let commentCreatedAt = '';

      if (diff < MS_SECONDS_CL) {
        commentCreatedAt = `${Math.floor(diff / MS_SECOND)}초 전`;
      } else if (diff < MS_MINUTES_CL) {
        commentCreatedAt = `${Math.floor(diff / MS_MINUTE)}분 전`;
      } else if (diff < MS_HOURS_CL) {
        commentCreatedAt = `${Math.floor(diff / MS_HOUR)}시간 전`;
      } else if (diff < MS_DAYS_CL) {
        commentCreatedAt = `${Math.floor(diff / MS_DAY)}일 전`;
      } else {
        commentCreatedAt = `${time.getMonth() + 1}/${time.getDate()}`;
      }

      this.setState({ commentCreatedAt });
    });
  }

  render() {
    const { text, userId, userProfileSrc } = this.props;
    const { commentCreatedAt } = this.state;
    return (
      <div className="Comment">
        <img className="img-profile" src={userProfileSrc} alt="profile" />
        <span className="txt-username">{userId}</span>
        <span className="txt-comment">{text}</span>
        <span className="txt-time">{commentCreatedAt}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  userProfileSrc: PropTypes.string.isRequired,
};
