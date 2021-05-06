import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialJavaScript from '../../../MenusTutorial/JavaScript/menuTutorialJavaScript';

class QueEsJavascript extends Component {
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
							<title>
								Introduccion. Que es JavaSCript? - TandGo - Aprende a programar con Html Css JavaScript
								jQuery
							</title>
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
						<h1 className="h1__tituloCapitulos">Que es JavaScript?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si HTML es el lenguaje de marcado que usamos
							para estructurar y dar significado a nuestro contenido web y, CSS es un lenguaje de reglas
							de estilo que usamos para estilizar nuestro contenido HTML, JavaScript es la parte logica de
							una pagina web, con la interactuamos. JavaScript es un lenguaje de secuencias de comandos
							que te permite crear contenido de actualización dinámica, controlar multimedia, animar
							imágenes y prácticamente todo lo demás.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript es el único lenguaje de
							programación que funciona en los navegadores de forma nativa (lenguaje interpretado sin
							necesidad de compilación). Esto significa, que no es necesario instalar ningun software para
							ejecutar JavaScirpt.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript sirve para que en una página web
							se consiga un mayor índice de interactividad con los usuarios y, por tanto, la experiencia
							de estos sea mucho mejor y más enriquecida. Es algo que se emplea para dotar de más
							funciones, facilitar la comunicación y, además, otorgar todas las mejoras posibles sin
							apenas incidir en el peso de la página, lo que garantiza una mayor velocidad de carga y una
							mejor reputación a ojos de Google.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript es un lenguaje de secuencias de
							comandos basado en objetos cuyo intérprete está integrado en el software del navegador web,
							como Microsoft Internet Explorer, Mozilla Firefox, Opera y Safari.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No hay que confundir Java con JavaScript.</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default QueEsJavascript;
