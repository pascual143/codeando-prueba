import React, { Component } from 'react';
// import Dropdown from 'react-dropdown';
import Helmet from 'react-helmet';
import 'react-dropdown/style.css';

import Html from '../Manual/Html/Html.js';

// const options = [ 'Cursos', 'Html', 'Css', 'JavaScript', 'jQuery', 'Bootstrap', 'React' ];
// const defaultOption = options[0];

export default class Categorias extends Component {
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
						<title>Categorias Menu Navegacion</title>
					</Helmet>
				</div>
				<div className="">
				<li className="menu--link fontMainButtons">
				<i class='uil-layers menu--icon'></i>

						<button className="fontMainButtons menu--item menu--item__has_sub_menu" onClick={this.showMenu}>Videos</button>

						{this.state.showMenu ? (
							<div
							className=""
							style={{minWidth: "100px"}}
							ref={(element) => {
									this.dropdownMenu = element;
								}}
							>
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><link href={<Html />} className="menuDropdown"> HTML</link></li>
								<li className="menu--link"><button className="menuDropdown"> CSS</button></li>
								<li className="menu--link"><button className="menuDropdown"> JavaScript</button></li>
								<li className="menu--link"><button className="menuDropdown"> jQuery</button></li>
								<li className="menu--link"><button className="menuDropdown"> Bootstrap</button></li>
								<li className="menu--link"><button className="menuDropdown"> React</button></li>
								<li className="menu--link"><button className="menuDropdown"> Git</button></li>
								<li className="menu--link"><button className="menuDropdown"> More...</button></li>
							</div>
							</div>

						) : null}
					</li>
					</div>
			</div>
		);
	}
}

// <div className="uil uil-layers menu--icon"/>

// <Dropdown
// 	options={options}
// 	onChange={this._onSelect}
// 	value={defaultOption}
// 	placeholder="Categorias"
// 	className=""
// />

// <div>
