import React, { Component } from 'react';


class Navbar extends Component {

	constructor(props) {
		super(props)
		this.state = {
			index: props.index,
			projects: props.projects,
			about: props.about,
			contact: props.contact
		}
	}

	render() {
		return (
			<nav class="navbar sticky-top navbar-default" role="navigation">
				<div class="container-fluid">
					<ul class="nav navbar-left">
						<li class="nav-item">
							<a href="#/" id='nav-title'>
								<h2>Christian Scarlett</h2>
							</a>
						</li>
					</ul>
					<ul class="nav navbar-right">
						<li class="nav-item">
							<a class={"nav-link" + (this.state.index ? " active" : "")} href="#/">
                Home
              </a>
						</li>
						<li class="nav-item">
							<a class={"nav-link" + (this.state.projects ? " active" : "")} href="#/projects">
								Projects
							</a>
						</li>
						<li class="nav-item">
							<a class={"nav-link" + (this.state.about ? " active" : "")} href="#/about">
                About
              </a>
						</li>
						<li class="nav-item">
							<a class={"nav-link" + (this.state.contact ? " active" : "")} href="#/contact">
                Contact
              </a>
						</li>
					</ul>
				</div>
			</nav>  
		);
	}
}

export default Navbar;