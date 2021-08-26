import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialJavaScript from '../../../MenusTutorial/JavaScript/menuTutorialJavaScript';
import tipoDatosJavascript1 from '../../../../styles/img/capitulosPics/tipoDatosJavascript1.jpg';

class Number5 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta
								name="keywords"
								content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender"
							/>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>TandGo</title>
							<title>Tipos de datos - TandGo - Aprende a programar con Html Css JavaScript jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section" style={{ margin: '10px' }}>
								<MenuTutorialJavaScript />
							</div>
						</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Tipos de datos y Variables</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;Todos los datos en JavaScript se dividen libremente en dos tipos:
							primitivos y compuestos.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;Como su nombre lo indica, los tipos de datos primitivos son los más
							simples e incluyen:
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Number (numeros)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• String (cadenas)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Booleans</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;Los tipos de datos compuestos incluyen:</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Object (objetos)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Function (funciones)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Array (matrices)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Date (fechas)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• RegExp (Expresiones Regulares)</p>
						<br />

						<p>&nbsp;&nbsp;&nbsp;&nbsp;Hay algunos otros tipos de datos, como:</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Null (nulo)</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Undefinded (indefinido)</p>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;Para comprobar con qué tipo de datos está trabajando, puede utilizar
							la función integrada typeof:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="150"
								alt="Tipos de datos en javascript con console.log"
								data-caption="Tipos de datos en javascript con console.log"
								src={tipoDatosJavascript1}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Number5;