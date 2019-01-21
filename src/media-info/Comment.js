import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interval } from 'rxjs';
import './Comment.css';
import SnsTimeFormatter from '../services/SnsTimeFormatter';

export default class Comment extends Component {
  state ={
    commentCreatedAt: '',
  };

  constructor(props) {
    super(props);
    this.formatter = new SnsTimeFormatter(new Date(props.timestamp * 1000));
    this.interval$ = interval(1000);
  }

  componentDidMount() {
    this.interval$.subscribe(() => {
      const now = new Date();
      const commentCreatedAt = this.formatter.parseBy(now);
      this.setState({ commentCreatedAt });
    });
  }

  render() {
    const { text, userId, userProfileSrc } = this.props;
    const { commentCreatedAt } = this.state;
    return (
      <div className="Comment">
        <img className="img-profile" src={userProfileSrc} alt="profile" />
        <a className="link-user" href={`/?q=${userId}`}>
          <span className="txt-username">{userId}</span>
        </a>
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
