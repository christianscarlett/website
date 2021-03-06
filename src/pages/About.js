import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
import Resume from '../documents/resume.pdf';

class About extends Component {
  render() {
    return (
      <Subpage 
        navbar={<Navbar about />} 
        title="About Me" 
        content = {(
          <p>
            I am Christian Scarlett: engineer, musician, overall nerd, and life-long learner. Currently an undergraduate at MIT studying Electrical Engineering and Computer Science, I look for projects in my spare time to accompany my studies, like this website.
            <br/>
            <br/>
            In the past I've worked on projects related to microcontrollers and robotics, including taking an organizational role in teaching classes I designed on those topics to 8-to-16-year-olds. Recently I've been interested in innovative, scalable software focused on impact. 
            <br/>
            <br/>
            If you want to know more about my work and school experiences, my resume is linked below.
            <br/>
            <br/>
            <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        )}
      />
    );
  }
}

export default About;