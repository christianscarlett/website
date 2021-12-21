import React, { Component } from 'react';
import Footer from '../components/Footer';
import Page from './Page';

class Subpage extends Component {

  render() {
    return (

      <Page 
      navbar={this.props.navbar}
      footer={false}
      content={(
        <>
        <div class='subpage'>
          <div class='subpage-title'>
            <div class='subpage-heading'>
              <h1>
                {this.props.title}
              </h1>
              <hr class="separator" />
              <h4>
                {this.props.subtitle ?? ''}
              </h4>
            </div>
            <Footer nocolor />
          </div>
          <div class='subpage-content'>
            {this.props.content}
          </div>
        </div>
        </>
        )}
      />
    );
  }
}

export default Subpage;