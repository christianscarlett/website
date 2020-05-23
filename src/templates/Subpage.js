import React, { Component } from 'react';
import Footer from '../components/Footer';
import '../subpage.css';

class Subpage extends Component {

  render() {
    return (
      <>
      {this.props.navbar}
      <div class="container-fluid" id="page-center">
        <div class="container-fluid">
          <div class="subpage-header">
            <h1>
              {this.props.title}
            </h1>
          </div>
        </div>
        <hr class="separator" />
        <div class="container">
          <div class="subpage-text">
            {this.props.content}
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default Subpage;