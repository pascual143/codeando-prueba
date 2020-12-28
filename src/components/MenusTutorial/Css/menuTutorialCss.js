import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
// import queEsCss from '../../Tutorial/Html/CapitulosCss/queEsCss';

export default class MenuTutorialCss extends Component {
    // constructor() {
	// 	super();

	// 	this.state = {
	// 		showMenu: false
	// 	};

	// 	this.showMenu = this.showMenu.bind(this);
	// 	this.closeMenu = this.closeMenu.bind(this);
	// }

	// showMenu(event) {
	// 	event.preventDefault();

	// 	this.setState({ showMenu: true }, () => {
	// 		document.addEventListener('click', this.closeMenu);
	// 	});
	// }

	// closeMenu(event) {
	// 	if (!this.dropdownMenu.contains(event.target)) {
	// 		this.setState({ showMenu: false }, () => {
	// 			document.removeEventListener('click', this.closeMenu);
	// 		});
	// 	}
	// }

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
				<i className='uil-clipboard-alt menu--icon'></i>
						
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><Link to={"/Css"} className="menuDropdown">Intro Css</Link></li>
								<li className="menu--link"><Link to={"/Css"}className="menuDropdown">CSS</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> JavaScript</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> jQuery</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Bootstrap</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> React</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> Git</Link></li>
								<li className="menu--link"><Link to={""}className="menuDropdown"> More...</Link></li>
							</div>
						
					</li>
					</div>
			</div>
		);
	}
}