import React from 'react';

import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Homepage() {
    return (
      <>
      <Helmet>
        <title>Christian Scarlett - Home</title>
      </Helmet>
      <div id='homepage'>
        <Navbar index />
        <div className="container-fluid content">
          <div className="row">
            <div className="container-fluid" id="maintext-container">
              <h1 id="hello">
                  Sup!
              </h1>
              <p>
                  This is my website to showcase and/or host my projects. Feel free to take a look!<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
}

export default Homepage;