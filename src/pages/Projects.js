import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';

class Projects extends Component {
  render() {
    return (
      <Subpage 
      navbar={<Navbar projects />}
      title="Projects" 
      content = {(
        <ul>
          <li>
            <a class="project" href="https://www.christianscarlett.com/go_fish" target="_blank"  rel="noopener noreferrer">
              Go Fish
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