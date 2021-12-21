import React, { Component } from 'react';
import Footer from '../components/Footer';

class Page extends Component {
  render() {
    return (
      <>
      {this.props.navbar}
      <div class='page'>
        {this.props.content}
        <Footer />
      </div>
      </>
    );
  }
}

export default Page;