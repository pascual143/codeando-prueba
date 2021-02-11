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
								<Link to={"/centering"} className="menu--link menuDropdown">Centrando Contenido</Link>
								<Link to={"/boxModel"} className="menu--link menuDropdown">Modelo de Caja</Link>
								<Link to={"/margenes"} className="menu--link menuDropdown">Margenes</Link>
								<Link to={"/paddings"} className="menu--link menuDropdown">Paddings</Link>
								<Link to={"/borders"} className="menu--link menuDropdown">Borders</Link>
								<Link to={"/overflow"} className="menu--link menuDropdown">Overflow</Link>
								<Link to={"/float"} className="menu--link menuDropdown">Float</Link>
								<Link to={"/tipografia"} className="menu--link menuDropdown">Tipografia</Link>
								<Link to={"/flexbox"} className="menu--link menuDropdown">Flexbox</Link>
								<Link to={"/color"} className="menu--link menuDropdown">Color</Link>
								<Link to={"/opacidad"} className="menu--link menuDropdown">Opacidad</Link>
								<Link to={"/display"} className="menu--link menuDropdown">Display</Link>
								<Link to={"/align"} className="menu--link menuDropdown">Alineamiento</Link>
								<Link to={"/pseudoclasses"} className="menu--link menuDropdown">Pseudo-classes</Link>
								<Link to={"/grid"} className="menu--link menuDropdown">Grid</Link>
								<Link to={"/tablas"} className="menu--link menuDropdown">Tablas</Link>
								<Link to={"/transiciones"} className="menu--link menuDropdown">Transiciones</Link>
								<Link to={"/animaciones"} className="menu--link menuDropdown">Animaciones</Link>
								<Link to={"/tranformaciones"} className="menu--link menuDropdown">Tranformaciones</Link>








								{/* <li className="menu--link"><Link to={""}className="menuDropdown"> More...</Link></li> */}
							</div>
						
					</li>
					</div>
			</div>
		);
	}
}