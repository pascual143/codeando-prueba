import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Helmet from 'react-helmet';
import 'react-dropdown/style.css';
import './stylesLayouts.css';

const options = [ 'Manual', 'Html', 'Css', 'JavaScript', 'jQuery', 'Bootstrap', 'React' ];
const defaultOption = options[0];

export default class Manual extends Component {
	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Manual Menu Navegacion</title>
					</Helmet>
				</div>
                <div className="menu">
                <li class="font menu--label menu--item__has_sub_menu">
                <i class='uil uil-clipboard-alt menu--icon'></i>

                    <Dropdown
						options={options}
						onChange={this._onSelect}
						value={defaultOption}
                        placeholder="Manual"
                        className=""
					/>
                </li>
				</div>

			</div>
		);
	}
}

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
