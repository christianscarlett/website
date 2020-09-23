import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
// import Fretless from '../projects/Fretless';

class Projects extends Component {
  render() {
    return (
      <Subpage 
      navbar={<Navbar projects />}
      title="Projects" 
      content = {(
        <ul>
          <li>
            <a class="project" href="https://swipemein.github.io" target="_blank" rel="noopener noreferrer">
              SwipeMeIn
            </a>
          </li>
          <li>
            <a class="project" href="https://www.christianscarlett.com/go_fish" target="_blank" rel="noopener noreferrer">
              Go Fish
            </a>
          </li>
          <li>
            <a class="project" href="#/projects/fretless">
              Fretless bass conversion
            </a>
          </li>
          <li>
            <a class="project" href="#/projects/puch">
              Electric 1977 Puch Maxi
            </a>
          </li>
          <li>
            <p class="project">More coming soon...</p>
          </li>
        </ul>
      )} />
    );
  }
}

export default Projects;