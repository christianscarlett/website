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
      <Navbar index />
      <div class="container-fluid content" id="homepage">
        <div class="row">
          <div class="container-fluid" id="maintext-container">
            <h1 id="hello">
                Sup!
            </h1>
            <p>
                This is my website to showcase my projects and contact to those interested, gaining web design skills along the way.<br/>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
}

export default Homepage;