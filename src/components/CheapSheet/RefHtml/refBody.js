import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import bodyApuntes from './../../../styles/img/apuntesPic/bodyApuntes.jpg';
import ButtonBack from '../buttonBack';
import MenuApuntesHtml from '../MenuApuntes/Html/menuApuntesHtml';

class RefBody extends Component {
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
							<title>TandGo</title>
							<title>
								Cuerpo de la pagina o body. Aprende codigo con Codeando Html Css JavaScript Bootstrap
								jQuery
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
					<div className="refHtml__body wrapper">
						<h1 className="refTitles__h2">"Body" - Cuerpo de la pagina</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La <code>&lt;body&gt;</code> etiqueta define el cuerpo
							del documento.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El <code>&lt;body&gt;</code> elemento
							contiene todo el contenido de un documento HTML, como encabezados, párrafos, imágenes,
							hipervínculos, tablas, listas, etc. Solo puede haber un <code>&lt;body&gt;</code> elemento
							en un documento HTML.
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="400"
								alt="El cuerpo o body de la web site es el elemento que contiene toco el contenido como encabezados parrafos imagenes hipervinculos listas etcetera"
								data-caption="El cuerpo o body de la web site es el elemento que contiene toco el contenido como encabezados parrafos imagenes hipervinculos listas etcetera"
								src={bodyApuntes}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El <code>&lt;body&gt;</code> debe ser el
							segundo elemento después de la etiqueta <code>&lt;head&gt;</code> o debe colocarse entre las
							etiquetas <code>&lt;/head&gt;</code> y <code>&lt;/html&gt;</code>. Esta etiqueta es
							necesaria para todos los documentos HTML y solo debe usarse una vez en todo el documento
							HTML.
						</p>
						<br />
					</div>
					<ButtonBack />
				</div>
			</Fragment>
		);
	}
}

export default RefBody;
