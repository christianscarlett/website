import React, { Component } from 'react';
import Footer from '../components/Footer';

class Page extends Component {
  render() {
    return (
      <>
      {this.props.navbar}
      <div className='page'>
        {this.props.content}
        {this.props.footer ? <Footer /> : <div></div>}
      </div>
      </>
    );
  }
}

export default Page;