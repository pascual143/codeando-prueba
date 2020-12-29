import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaRadio38 from '../../../../styles/img/capitulosPics/entradaRadio38.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EntradaRadio38 extends Component {
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
							<title>Entrada de boton de radio - Aprender codigo con Codeando Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Entrada de Radio o Radio Input</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las casillas de verificación funcionan bien si queremos
							presentar a los usuarios múltiples opciones y permitirles elegir una o más de las opciones.
							Sin embargo, hay casos en los que queremos presentar múltiples opciones y solo permitir una
							selección, como preguntar a los usuarios si están de acuerdo o en desacuerdo con los
							términos y condiciones. Veamos el código utilizado para crear botones de radio:
						</p>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
						<br />
						<div style={{ margin: '10px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="400"
								alt="Entrada de la casilla de verificacion o casilla checkbox "
								data-caption="Entrada de la casilla de verificacion o casilla checkbox "
								src={entradaRadio38}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formulario procesado que contiene botones de radio Aviso
							del fragmento de código, los botones de opción (como las casillas de verificación) no
							muestran su valor. Tenemos un <code>&lt;label&gt;</code> asociado para representar el valor
							del botón de radio. Para agrupar los botones de radio, les asignamos el mismo nombre y solo
							se puede seleccionar un botón de radio de ese grupo.
						</p>
						<br />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EntradaRadio38;
