import React, { Component } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../subpage.css";

class Post extends Component {
  render() {
    return (
      <>
      <Navbar projects />
      <div class="container-fluid" id="page-center">
        <div class="container-fluid">
          <div class="post-header">
            <h1>
              {this.props.title}
            </h1>
          </div>
        </div>
        <hr class="separator" />
        <div class="container">
          <div class="post-text">
            {this.props.content}
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default Post;