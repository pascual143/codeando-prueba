import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet';
import 'react-dropdown/style.css';
import './stylesLayouts.css';


export default class CheapSheet extends Component {
	constructor() {
		super();

		this.state = {
			showMenu: false
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();

		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>CheapSheet Manual Desarrollador programador web</title>
					</Helmet>
				</div>
				<div className="">
				<li className="menu--link fontMainButtons">
				<i className='uil-clipboard-alt menu--icon'></i>
						<Link to={"/HomeFeatures"}>
						<button className="menu--item menu--item__has_sub_menu fontMainButtons" onClick={this.showMenu}> CheapSheet</button>
						</Link>
						{this.state.showMenu ? (
							<div
							className=""
							style={{minWidth: "100px"}}
							ref={(element) => {
									this.dropdownMenu = element;
								}}
							>
								<div className="font" style={{minHeight:"250px"}}>

								<li asclassName="menu--link"><Link to={"/CheapSheet"} className="menuDropdown">HTML</Link></li>
								<li className="menu--link"><Link to={"/Css"}className="menuDropdown">CSS</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> JavaScript</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> jQuery</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Bootstrap</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> React</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Git</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> More...</Link></li>
							</div>
							</div>

						) : null}
					</li>
					</div>
			</div>
		);
	}
}
