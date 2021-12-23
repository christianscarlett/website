import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Subpage from '../templates/Subpage';

import MITLogo from '../images/logos/mitlogo.png';

class ContactMethod extends Component {
  render() {
    return (
      <>
      <a class='contact-method-wrapper' href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div class='contact-method'>
          <a class='contact-icon' href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.icon}</a>
          <div class='contact-description'>
            <h5>{this.props.title}</h5>
            <p>{this.props.text}</p>
          </div>
        </div>
      </a>
      </>
    );
  }
}

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
          <div className='pad-content'>
            <p>
            The best way to get in touch with me is through email or social media. Feel free to email me at christianscarlett21@gmail.com and my school email cjscar@mit.edu&mdash;or, follow the icons for my other sites.
            </p>
            <div className="container-fluid">
              <div className="contact-icons">
                <ContactMethod link='mailto:christianscarlett21@gmail.com' icon={(<i class="fa fa-envelope"></i>)} title='Email' text='christianscarlett21@gmail.com' />
                <ContactMethod link='mailto:cjscar@mit.edu' icon={(<img class='mit-icon' src={MITLogo} alt='MIT Logo' />)} title='MIT Email' text='cjscar@mit.edu' />
                <ContactMethod link='https://www.facebook.com/chriscar2000' icon={(<i className="fa fa-facebook"></i>)} title='Facebook' />
                <ContactMethod link='https://twitter.com/ChriScar2000' icon={(<i className="fa fa-twitter"></i>)} title='Twitter' />
                <ContactMethod link='https://www.instagram.com/christian_scarlett/' icon={(<i className="fa fa-instagram"></i>)} title='Instagram' />
                <ContactMethod link='https://www.linkedin.com/in/christianscarlett/' icon={(<i className="fa fa-linkedin"></i>)} title='LinkedIn' />
              </div>
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