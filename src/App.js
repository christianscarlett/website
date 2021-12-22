import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Post from './templates/Post';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SwearJar from './projects/SwearJar';

import FretlessData from './projects/FretlessData';
import PuchData from './projects/PuchData';

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
          <Post data={FretlessData} />
        } />

        <Route exact={true} path='/projects/puch' render={() => 
          <Post data={PuchData} />
        } />

        <Route exact={true} path='/swearjar' render={() => 
          <SwearJar />
        } />

      </Switch>
    </HashRouter>
  );
}

export default App;
