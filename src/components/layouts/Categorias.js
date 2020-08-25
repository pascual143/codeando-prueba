import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Helmet from 'react-helmet';
import 'react-dropdown/style.css';

const options = [ 'Cursos', 'Html', 'Css', 'JavaScript', 'jQuery', 'Bootstrap', 'React' ];
const defaultOption = options[0];

export default class Categorias extends Component {
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
				<div className="menu">
				<li class="menu--item font">

					<div className="uil uil-layers menu--icon"/>

						<Dropdown
							options={options}
							onChange={this._onSelect}
							value={defaultOption}
							placeholder="Categorias"
							className=""
						/>
				</li>
				</div>
				</div>
		);
	}
}
