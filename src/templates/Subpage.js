import React, { Component } from 'react';
import Footer from '../components/Footer';
import Page from './Page';

class Subpage extends Component {

  render() {
    return (

      <Page 
      navbar={this.props.navbar}
      content={(
        <>
        <div class="subpage-content container-fluid" id="page-center">
          <div class='row'>
            <div class='title-col col-2'>
              <h1>
                {this.props.title}
              </h1>
              <hr class="separator" />
              <div class='test'></div>
            </div>
            <div class='col'>
              <div class="subpage-text">
                {this.props.content}
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      />
    );
  }
}

export default Subpage;