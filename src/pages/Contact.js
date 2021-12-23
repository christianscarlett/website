import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';

class Contact extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>Christian Scarlett - Contact</title>
      </Helmet>
      <Subpage
        navbar={<Navbar contact />} 
        title="Contact Me" 
        content={(
          <>
          <p>
          The best way to get in touch with me is through email or social media. Feel free to email me at christianscarlett21@gmail.com and my school email cjscar@mit.edu&mdash;or, follow the icons for my other sites.
          </p>
          <div className="container-fluid">
              <div className="contact-icons">
                  <a href="https://www.facebook.com/chriscar2000" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/ChriScar2000" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href="https://www.instagram.com/christian_scarlett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/christianscarlett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
              </div>
          </div>
          </>
        )}
      />
      </>
    );
  }
}

export default Contact;