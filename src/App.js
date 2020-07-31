import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Fretless from './projects/Fretless';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path='/' render={() =>
          <Homepage />
        } />
        <Route exact={true} path='/projects' render={() => 
          <Projects />
        } />
        <Route exact={true} path='/about' render={() => 
          <About />
        } />
        <Route exact={true} path='/contact' render={() =>
          <Contact />
        } />

        <Route exact={true} path='/projects/fretless' render={() => 
          <Fretless />
        } />

      </Switch>
    </HashRouter>
  );
}

export default App;
