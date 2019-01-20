import React, { Component } from 'react';
import './Home.css';
import Main from '../main/Main';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="header">omni stagram</header>
        <article className="body">
          <Main />
        </article>
      </div>
    );
  }
}

export default Home;
