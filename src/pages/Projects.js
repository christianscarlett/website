import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
import ProjectCard from '../components/ProjectCard';

import SwipemeinData from '../projects/SwipemeinData';
import GofishData from '../projects/GofishData';
import FretlessData from '../projects/FretlessData';
import PuchData from '../projects/PuchData';
import SoundcloudData from '../projects/SoundcloudData';
import MazeData from '../projects/MazeData';

class Projects extends Component {
  render() {
    const projects = [
      SwipemeinData,
      GofishData,
      FretlessData,
      PuchData,
      SoundcloudData,
      MazeData,
    ];

    const displayProjects = projects.map(project => (
      <div className='card-col col-md-6' key={project.title}>
        <ProjectCard project={project}  />
      </div>
    ));

    return (
      <>
      <Helmet>
        <title>Christian Scarlett - Projects</title>
      </Helmet>
      <Subpage 
      navbar={<Navbar projects />}
      title="Projects" 
      content = {(
        <>
        <div className='project-cards container-fluid'>
          <div className='row'>
            {displayProjects}
          </div>
        </div>
        </>
      )} />
      </>
    );
  }
}

export default Projects;