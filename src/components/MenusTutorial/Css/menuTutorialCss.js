import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

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
								<Link to={"/agregarEstilos"} className="menu--link menuDropdown">Agregar Estilos</Link>
								<Link to={"/creandoNormas"} className="menu--link menuDropdown">Creando Normas</Link>
								<Link to={"/selectoresCss"} className="menu--link menuDropdown">Selectores Css</Link>
								<Link to={"/background"} className="menu--link menuDropdown">Background o Fondos</Link>

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