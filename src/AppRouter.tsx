import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Game from './containers/Game';
import History from './containers/History';

const AppRouter: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/game/:type" exact component={Game} />
    <Route path="/history" exact component={History} />
  </Switch>
);

export default AppRouter;
