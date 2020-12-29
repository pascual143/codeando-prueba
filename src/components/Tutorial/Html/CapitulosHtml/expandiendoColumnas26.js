import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import expandiendoColumnas26 from '../../../../styles/img/capitulosPics/expandiendoColumnas26.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class ExpandiendoColumnas26 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Expandiendo Columnas - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Expandiendo Columnas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Qué sucede si la tabla contiene datos que abarcan
							varias columnas?
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por ejemplo, un calendario personal podría tener eventos
							que abarcan varias horas o incluso varios días.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los datos pueden abarcar columnas usando el atributo
							colspan. Los atributos aceptan un número entero (mayor o igual a 1) para denotar el número
							de columnas que abarca.
						</p>
						<br />
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="350"
								alt="Expandiendo las Columnas"
								data-caption="Expandiendo las Columnas"
								src={expandiendoColumnas26}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, los datos Fuera de la ciudad
							abarcan los encabezados de las tablas de lunes y martes utilizando el valor 2 (dos
							columnas). Los datos Volver a la ciudad aparecen solo bajo el encabezado Miércoles.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ExpandiendoColumnas26;
