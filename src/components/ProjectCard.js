import React, { Component } from 'react';

const cardimg = require('../images/bassbg.jpg');

class ProjectCard extends Component {
  render() {
    const project = this.props.project;
    return (
      <div class='project-card card'>
        <div class='card-img-container'>
          <img class='card-img-top' src={cardimg} alt='cardtop' />
        </div>
        <div class='card-body'>
          <h5 class='card-title'><a href={'#/projects/'+project.postLink}>{project.title}</a></h5>
          <p class='card-text'>Some text for a project haha.</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;