import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="footer font-small py-3" id="footer">
        <div class="row-12">
          <div class="container text-center">
            <a href="https://www.facebook.com/traF2000" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/ChriScar2000" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
            <a href="https://www.instagram.com/christian_scarlett/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/christianscarlett/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© {new Date(Date.now()).getFullYear()} Copyright Christian Scarlett</div>
    </footer>
    );
  }
}

export default Footer;