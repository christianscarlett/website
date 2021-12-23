import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className={(this.props.nocolor ? "nocolor " : "") + "footer font-small py-3"} id="footer">
        <div className="row-12">
          <div className="container text-center">
            <a href="https://www.facebook.com/chriscar2000" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/ChriScar2000" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com/christian_scarlett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/christianscarlett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-copyright text-center">© {new Date(Date.now()).getFullYear()} Christian Scarlett</div>
      </footer>
    );
  }
}

export default Footer;