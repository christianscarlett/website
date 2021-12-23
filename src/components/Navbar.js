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
			<nav className="navbar sticky-top navbar-default" role="navigation">
				<div className="container-fluid">
					<ul className="nav navbar-left">
						<li className="nav-item">
							<a href="#/" id='nav-title'>
								<h2>Christian Scarlett</h2>
							</a>
						</li>
					</ul>
					<ul className="nav navbar-right">
						<li className="nav-item">
							<a className={"nav-link" + (this.state.index ? " active" : "")} href="#/">
                Home
              </a>
						</li>
						<li className="nav-item">
							<a className={"nav-link" + (this.state.projects ? " active" : "")} href="#/projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className={"nav-link" + (this.state.about ? " active" : "")} href="#/about">
                About
              </a>
						</li>
						<li className="nav-item">
							<a className={"nav-link" + (this.state.contact ? " active" : "")} href="#/contact">
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