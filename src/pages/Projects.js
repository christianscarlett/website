import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
import ProjectCard from '../components/ProjectCard';

import FretlessData from '../projects/FretlessData';
import PuchData from '../projects/PuchData';

class Projects extends Component {
  render() {
    const projects = [
      {title:"SwipeMeIn", postLink:"swipemein", link:"https://swipemein.github.io"},
      {title:"Go Fish", postLink:"gofish", link:"https://www.christianscarlett.com/go_fish"},
      FretlessData,
      PuchData,
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