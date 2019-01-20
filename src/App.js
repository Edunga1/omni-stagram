import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import MediaInfo from './media-info/MediaInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:user/:media" component={MediaInfo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
