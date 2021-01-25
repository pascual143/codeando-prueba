import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';

class QueEsCss extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>TandGo</title>
							<title>Introduccion. Que es Css? - TandGo - Aprende a programar con Html Css JavaScript jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialCss />
						</div>
					</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Que es Css?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las hojas de estilo en cascada (Cascading
							Style Sheets) es un lenguaje que se utiliza para controlar la presentación de elementos
							dentro de los documentos del lenguaje de marcado HyperText (HTML), es decir, darle estilo y
							hacer los documentos mas visuales.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La presentación se especifica mediante
							"estilos", que pueden asignarse "en línea” a cada atributo de estilo de los elementos HTML,
							o por “normas” con etiquetas <code>&lt;style&gt;</code> <code>&lt;/style&gt;</code> en la sección de cabecera del documento HTML.
							Cada norma de estilo selecciona elementos específicos dentro del Html(div, p , h1…) y luego
							les aplica un estilo específico.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El termino “Cascading” in CSS describe la
							manera en que los estilos caen de una hoja(Sheet) a otra. Esto significa que el navegador
							normalmente aplicará las reglas de estilo en una hoja de estilo del autor, si es necesario.
							Sino, aplicará el estilo en una hoja de usuario, si es lo que necesita. Y sino, aplicará las reglas de estilo en la hoja de estilo del buscador por defecto.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default QueEsCss;
