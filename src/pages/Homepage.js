import React from 'react';

import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';

function Homepage() {
    return (
      <>
      <Helmet>
        <title>Christian Scarlett - Home</title>
      </Helmet>
      <Navbar index />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md homepage-left">
            <img id="frontpage-photo" src={require("../images/lake.jpg")} alt="not found" />
          </div>

        <div class="col-md">
          <div id="maintext">
              <div class="container-fluid" id="maintext-container">
                <h1 id="hello">
                    Hello!
                </h1>
                <p>
                    This is my website to showcase my projects and contact to those interested, gaining web design skills along the way.<br/>
                    <br/>
                    Thanks for stopping by!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Homepage;