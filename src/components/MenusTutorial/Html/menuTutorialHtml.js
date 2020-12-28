import React, { Component } from 'react'
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// import QueEsHtml from '../../Tutorial/Html/CapitulosHtml/queEsHtml';
// import AnatomiaHtml from '../../Tutorial/Html/CapitulosHtml/anatomiaHtml';

export default class MenuTutorialHtml extends Component {
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
				<div>
				<li className="menu--link fontMainButtons">
				<i className=''></i>
								<div className="font" style={{minHeight:"250px"}}>

								<li className="menu--link"><Link to={"/queEsHtml"} className="menuDropdown">Que es Html</Link></li>
								<li className="menu--link"><Link to={"/anatomiaHtml"} className="menuDropdown">Anatomia Standard</Link></li>
								<li className="menu--link"><Link to={"/normasStandard"} className="menuDropdown">Normas Standard</Link></li>
								<li className="menu--link"><Link to={"/etiquetaHtml"} className="menuDropdown">La etiqueta Html</Link></li>
								<li className="menu--link"><Link to={"/estructuraHtml"} className="menuDropdown">Estructura Html</Link></li>
								<li className="menu--link"><Link to={"/divs"} className="menuDropdown">Divs</Link></li>
								<li className="menu--link"><Link to={"/Head"} className="menuDropdown">Head</Link></li>
								<li className="menu--link"><Link to={"/"} className="menuDropdown"> More...</Link></li>
							</div>
					</li>
					</div>
			</div>
		);
	}
}
