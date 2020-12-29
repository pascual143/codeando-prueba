import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import establecerMinMax44 from '../../../../styles/img/capitulosPics/establecerMinMax44.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EstablecerMinMax44 extends Component {
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
							<title>Establecer un minimo y un maximo numerico - Aprender codigo con Codeando Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Establecer un Mínimo y un Máximo</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otra validación integrada que podemos usar es asignar un
							valor mínimo o máximo para un campo numérico, p. <code>&lt;</code>input type = "number"<code>&gt;</code>{' '}
							y <code>&lt;</code>input type = "range"<code>&gt;</code>. Para establecer un valor mínimo
							aceptable, usamos el atributo min y asignamos un valor. Por otro lado, para establecer un
							valor máximo aceptable, asignamos un valor al atributo max. Veamos esto en el código:
						</p>
						<br />
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Establecer un Minimo y un Maximo numerico en el input o entrada"
								data-caption="Establecer un Minimo y un Maximo numerico en el input o entrada"
								src={establecerMinMax44}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si un usuario intenta enviar una entrada que sea menor
							que 1, aparecerá una advertencia: solicite en un campo de número que el usuario ingrese un
							valor mayor o igual a 1
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aparecerá un mensaje similar si un usuario intenta
							ingresar un número mayor que 4. Ahora veamos esta acción.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EstablecerMinMax44;
