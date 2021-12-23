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
        <div className='subpage'>
          <div className='subpage-title'>
            <div className='subpage-heading'>
              <h1>
                {this.props.title}
              </h1>
              <hr className="separator" />
              <h4>
                {this.props.subtitle ?? ''}
              </h4>
            </div>
            <Footer nocolor />
          </div>
          <div className='subpage-content'>
            <div className='diamonds'>
              <p>&#9670;</p>
              <p>&#9670;</p>
              <p>&#9670;</p>
            </div>
            <div>
              {this.props.content}
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