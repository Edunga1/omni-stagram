import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">omni stagram</header>
        <article className="body">
          <Main />
        </article>
      </div>
    );
  }
}

export default App;
