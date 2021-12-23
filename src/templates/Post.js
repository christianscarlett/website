import React, { Component } from "react";

import Subpage from './Subpage';
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

class Post extends Component {
  render() {
    return (
      <>
      <Subpage 
      navbar={<Navbar projects />}
      title={'Projects'}
      subtitle={this.props.data.title}
      content={(
      <div className="container-fluid" id="page-center">
        <div className="post-text">
          {this.props.data.content}
        </div>
      </div>
      )}
      />
      </>
    );
  }
}

export default Post;