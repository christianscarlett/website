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
      subtitle={this.props.title}
      content={(
      <div class="container-fluid" id="page-center">
        <div class="post-text">
          {this.props.content}
        </div>
      </div>
      )}
      />
      </>
    );
  }
}

export default Post;