import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
import ProjectCard from '../components/ProjectCard';

class Projects extends Component {
  render() {
    const projects = [
      {title:"SwipeMeIn", postLink:"swipemein", link:"https://swipemein.github.io"},
      {title:"Go Fish", postLink:"gofish", link:"https://www.christianscarlett.com/go_fish"},
      {title:"Fretless Bass Conversion", postLink:"fretless", link:null},
      {title:"Electric 1977 Puch Maxi", postLink:"puch", link:null},
    ];

    const displayProjects = projects.map(project => (
      <div class='card-col col-md-6'>
        <ProjectCard title={project.title} postLink={project.postLink} link={project.link} />
      </div>
    ));

    return (
      <Subpage 
      navbar={<Navbar projects />}
      title="Projects" 
      content = {(
        <>
        <div class='project-cards container-fluid'>
          <div class='row'>
            {displayProjects}
          </div>
        </div>
        </>
      )} />
    );
  }
}

export default Projects;