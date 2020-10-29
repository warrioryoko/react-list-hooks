import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCharacters from '../../containers/ListCharacters';
import DetailCharacters from '../../containers/DetailCharacters';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={ListCharacters} />
          <Route path="/:characterName" exact component={DetailCharacters} />
        </Switch>
      </Router>
    </div>
  );
}
