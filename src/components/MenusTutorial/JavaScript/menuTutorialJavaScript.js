import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// import QueEsHtml from '../../Tutorial/Html/CapitulosHtml/queEsHtml';
// import AnatomiaHtml from '../../Tutorial/Html/CapitulosHtml/anatomiaHtml';

export default class MenuTutorialJavaScript extends Component {
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

								<Link to={"/queEsJavaScript"} className="menu--link menuDropdown">Que es JavaScript</Link>
								<Link to={"/anadirJavaScript"} className="menu--link menuDropdown">Anadir JavaScript</Link>
								<Link to={"/outputJavascript"} className="menu--link menuDropdown">Output JavaScript</Link>
								<Link to={"/tiposDatos"} className="menu--link menuDropdown">Tipos de Datos</Link>
								<Link to={"/numeros"} className="menu--link menuDropdown">Numeros</Link>


							</div>
					</li>
					</div>
			</div>
		);
	}
}
