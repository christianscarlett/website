import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Post from './templates/Post';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SwearJar from './projects/SwearJar';

import SwipemeinData from './projects/SwipemeinData';
import GofishData from './projects/GofishData';
import FretlessData from './projects/FretlessData';
import PuchData from './projects/PuchData';

function App() {
  const projects = [
    SwipemeinData,
    GofishData,
    FretlessData,
    PuchData,
  ];
  const projectRoutes = projects.map(project => (
    <Route exact={true} path={'/projects/'+project.postLink} key={project.title} render={() => 
      <Post data={project} />
    } />
  ));
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

        {projectRoutes}
        
        <Route exact={true} path='/swearjar' render={() => 
          <SwearJar />
        } />

      </Switch>
    </HashRouter>
  );
}

export default App;
