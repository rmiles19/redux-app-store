import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AppView from './components/AppView';
import NoMatch from './components/NoMatch';
import FetchApps from './components/FetchApps';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/apps" component={FetchApps} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;