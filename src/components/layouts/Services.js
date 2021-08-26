import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-dropdown';
import Helmet from 'react-helmet';
// import 'react-dropdown/style.css';
import './stylesLayouts.css';
// import HomeFeatures from '../Home/HomeFeatures.js';

// import IntroHtml from '../Manual/Html/Html.js'

// const options = [ 'Manual', 'Html', 'Css', 'JavaScript', 'jQuery', 'Bootstrap', 'React' ];
// const defaultOption = options[0];

export default class Manual extends Component {
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
						<title>Categorias Menu Navegacion. Aprende programacion con TandGo Html Css JavaScript jQuery </title>
					</Helmet>
				</div>
				<div className="">
				<li className="menu--link fontMainButtons">
				<i className='uil-clipboard-alt menu--icon'></i>
						<Link to={"/HomeFeatures"}>
						<button className="menu--item menu--item__has_sub_menu fontMainButtons" onClick={this.showMenu}> Servicios</button>
						</Link>
						{this.state.showMenu ? (
							<div
							// className=""
							style={{minWidth: "100px"}}
							ref={(element) => {
									this.dropdownMenu = element;
								}}
							>
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><Link to="/tandgo" className="menuDropdown">Home</Link></li>
								<li className="menu--link"><Link to="/tandgo/brandIdentity" className="menuDropdown">Brand Identity</Link></li>
								<li className="menu--link"><Link to="/tandgo/webDesign" className="menuDropdown">Web Design</Link></li>
								<li className="menu--link"><Link to="/tandgo/webDevelopment" className="menuDropdown">Web Development</Link></li>
								<li className="menu--link"><Link to="/tandgo/digitalMarketing" className="menuDropdown">Digital Marketing</Link></li>
								<li className="menu--link"><Link to="/tandgo/socialMedia" className="menuDropdown">Social Media</Link></li>
								
							</div>
							</div>

						) : null}
					</li>
					</div>
			</div>
		);
	}
}