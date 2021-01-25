import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
// import queEsCss from '../../Tutorial/Html/CapitulosCss/queEsCss';

export default class MenuTutorialCss extends Component {
	render() {
		return (
			<div>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Categorias Menu Navegacion - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
					</Helmet>
				</div>
				<div>
				<li className="menu--link fontMainButtons">
				<i className=''></i>
						
								<div className="font" style={{minHeight:"250px"}}>

								<Link to={"/queEsCss"} className="menu--link menuDropdown">Que es Css</Link>
								<Link to={"/agregarEstilos2"} className="menu--link menuDropdown">Agregar Estilos</Link>
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