import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';
import Resume from '../documents/ChristianScarlettResume2021.pdf';

class About extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>Christian Scarlett - About</title>
      </Helmet>
      <Subpage 
        navbar={<Navbar about />} 
        title="About Me" 
        content = {(
          <>
          <p>
            I am Christian Scarlett: engineer, musician, overall nerd, and life-long learner. Currently an undergraduate at MIT studying Electrical Engineering and Computer Science, I look for projects in my spare time to accompany my studies, like this website.
            <br/>
            <br/>
            If you want to know more about my work and school experiences, my resume is linked below.
            <br/>
            <br/>
            <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
          <div className='resume-embed'>
            <embed src={Resume} width="100%" height="800px" />
          </div>
          </>
        )}
      />
      </>
    );
  }
}

export default About;