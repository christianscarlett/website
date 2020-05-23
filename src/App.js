import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';

import './webcss.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path='/' render={() =>
          <Homepage />
        } />
      </Switch>
    </HashRouter>
  );
}

export default App;
