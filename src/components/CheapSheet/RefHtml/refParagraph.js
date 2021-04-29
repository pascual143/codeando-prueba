import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import ButtonBack from '../buttonBack';
import MenuApuntesHtml from '../MenuApuntes/menuApuntesHtml';

class RefParagraph extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta
								name="keywords"
								content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender"
							/>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>
								Paragraph p. Aprende codigo con Codeando Html Css JavaScript Bootstrap
							</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section">
								<MenuApuntesHtml />
							</div>
						</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Paragraph o parrafos</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lo elementos de HTML <code>&lt;p&gt;</code> definen los parrafos de las frases de un texto.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los párrafos son el elemento HTML más básico.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los parrafos no aceptan espacios o cambios de lineas. Tampoco simbolos. Reproducen el texto tal y como esta escrito sin estilos.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para introducir saltos de linea en los parrafos de introducir <code>&lt;br&gt;</code> tag.
						</p>
						<br />
						<ButtonBack />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default RefParagraph;
