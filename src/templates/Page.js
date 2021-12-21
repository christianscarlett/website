import React, { Component } from 'react';
import Footer from '../components/Footer';

class Page extends Component {
  render() {
    return (
      <>
      {this.props.navbar}
      <div class='page'>
        {this.props.content}
        {this.props.footer ? <Footer /> : <div></div>}
      </div>
      </>
    );
  }
}

export default Page;