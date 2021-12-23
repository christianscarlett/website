import React, { Component } from 'react';

const cardimg = require('../images/bassbg.jpg');

class ProjectCard extends Component {
  render() {
    const project = this.props.project;
    return (
      <div className='project-card card'>
        <div className='card-img-container'>
          <img className='card-img-top' src={cardimg} alt='cardtop' />
        </div>
        <div className='card-body'>
          <h5 className='card-title'><a href={'#/projects/'+project.postLink}>{project.title}</a></h5>
          <p className='card-text'>Some text for a project haha.</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;