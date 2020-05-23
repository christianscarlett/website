import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';

class Contact extends Component {
  render() {
    return (
      <Subpage
        navbar={<Navbar contact />} 
        title="Contact Me" 
        content={(
          <>
          <p>
          The best way to get in touch with me is through email or social media. Feel free to email me at christianscarlett21@gmail.com and my school email cjscar@mit.edu&mdash;or, follow the icons for my other sites.
          </p>
          <div class="container-fluid">
              <div class="contact-icons">
                  <a href="https://www.facebook.com/traF2000" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/ChriScar2000" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                  <a href="https://www.instagram.com/christian_scarlett/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/christianscarlett/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
              </div>
          </div>
          </>
        )}
      />
    );
  }
}

export default Contact;