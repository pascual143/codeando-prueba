import React, { Component } from 'react';
// import Dropdown from 'react-dropdown';
import Helmet from 'react-helmet';
import 'react-dropdown/style.css';
import './stylesLayouts.css';

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
						<title>Categorias Menu Navegacion</title>
					</Helmet>
				</div>
				<div className="">
				<li className="menu--link fontMainButtons">
				<i className='uil-clipboard-alt menu--icon'></i>

						<button className="menu--item menu--item__has_sub_menu fontMainButtons" onClick={this.showMenu}>Manual</button>

						{this.state.showMenu ? (
							<div
							className=""
							style={{minWidth: "100px"}}
							ref={(element) => {
									this.dropdownMenu = element;
								}}
							>
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><button className="menuDropdown"> HTML</button></li>
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
// codigo del primer dropdown 
// render() {
// 	return (
// 		<div>
// 			<div>
// 				<Helmet>
// 					<meta charSet="utf-8" />
// 					<title>Codeando</title>
// 					<title>Manual Menu Navegacion</title>
// 				</Helmet>
// 			</div>
// 			<div className="menu">
// 			<li class="font menu--label menu--item__has_sub_menu">
// 			<i class='uil uil-clipboard-alt menu--icon'></i>

// 				<Dropdown
// 					options={options}
// 					onChange={this._onSelect}
// 					value={defaultOption}
// 					placeholder="Manual"
// 					className=""
// 				/>
// 			</li>
// 			</div>

// 		</div>
// 	);
// }
// }




// codigo importado del core

// <li className="menu--item  menu--item__has_sub_menu">
// <label className="menu--link" title="Tests">
//     <i className="uil uil-clipboard-alt menu--icon"/>
//     <span className="menu--label">Manual</span>
// </label>
// <ul className="sub_menu">
//     <li className="sub_menu--item">
//         <a href="certification_center.html" className="sub_menu--link">
//             Certification Center
//         </a>
//     </li>
//     <li className="sub_menu--item">
//         <a href="certification_start_form.html" className="sub_menu--link">
//             Certification Fill Form
//         </a>
//     </li>
//     <li className="sub_menu--item">
//         <a href="certification_test_view.html" className="sub_menu--link">
//             Test View
//         </a>
//     </li>
//     <li className="sub_menu--item">
//         <a href="certification_test__result.html" className="sub_menu--link">
//             Test Result
//         </a>
//     </li>
//     <li className="sub_menu--item">
//         <a
//             href="http://www.gambolthemes.net/html-items/edututs+/Instructor_Dashboard/my_certificates.html"
//             className="sub_menu--link"
//         >
//             My Certification
//         </a>
//     </li>
// </ul>
// </li>
