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

	displayMenu() {
		console.log('in');
    if (document.getElementById("navbar-list").classList.contains("show")) {
        document.getElementById("navbar-list").classList.remove("show")
    }
    else {
        document.getElementById("navbar-list").classList.add("show")
    }
	}

	render() {
		return (
			<nav class="navbar sticky-top navbar-expand-md navbar-dark">
				<a id='nav-title' href="#/"><h2>Christian Scarlett</h2></a>

				<button class="navbar-toggler" onClick={() => this.displayMenu()}>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id='navbar-list'>
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