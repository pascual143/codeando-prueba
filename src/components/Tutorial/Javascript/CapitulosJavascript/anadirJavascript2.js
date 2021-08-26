import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialJavaScript from '../../../MenusTutorial/JavaScript/menuTutorialJavaScript';
import anadirJavascript1 from '../../../../styles/img/capitulosPics/anadirJavascript1.jpg';
import anadirJavascript2 from '../../../../styles/img/capitulosPics/anadirJavascript2.jpg';
import anadirJavascript3 from '../../../../styles/img/capitulosPics/anadirJavascript3.jpg';

class AnadirJavascript2 extends Component {
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
								Introduccion. Formas de anadir Javascript - TandGo - Aprende a programar con Html Css
								JavaScript jQuery
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
						<h1 className="h1__tituloCapitulos">Formas de anadir JavaScript</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay 3 formas princiales de agregar
							JavaScript a nuestros documentos: Inline, External o en el Head.
						</p>
						<br />
						<h1 className="h1__tituloCapitulos">Inline - En linea</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podemos anadir JavaScript a nuestro
							documento a traves de el tag de HTML llamado <code>&lt;script&gt;</code>.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="130"
								alt="Vemos como anadir Javascript a nuestro documento html"
								data-caption="Vemos como anadir Javascript a nuestro documento html"
								src={anadirJavascript1}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este script puede aparecer en cualquier
							sitio de tu documento HTML aunque muchos profesionales recomiendan ponerlo al final de dicho
							documento por cuestiones de rapidez, ya que HTML es mas facil de por nuestros navegadores,
							estos navegadores visualizaran primero el documento en html y luego arrancaran la logica de
							JavaScript.
						</p>
						<br />
						<h1 className="h1__tituloCapitulos">Script en el Head</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En este ejemplo, se coloca una función de
							JavaScript en la sección <code>&lt;head&gt;</code> de una página HTML.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La función se invoca (llama) cuando se hace
							clic en un botón:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="550"
								height="430"
								alt="Vemos como anadir Javascript a nuestro documento html guardado en el head"
								data-caption="Vemos como anadir Javascript a nuestro documento html guardado en el head"
								src={anadirJavascript2}
							/>
						</div>
						<br />
						<h1 className="h1__tituloCapitulos">External JavaScript</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los scripts también se pueden colocar en
							archivos externos:
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los scripts externos son prácticos cuando se
							usa el mismo código en muchas páginas web diferentes.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los archivos JavaScript tienen la extensión
							de archivo .js.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para utilizar un script externo, ponga el
							nombre del archivo de script en el atributo src (fuente) de una etiqueta{' '}
							<code>&lt;script&gt;</code>:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="130"
								alt="Vemos como anadir Javascript a nuestro documento html guardado en el head"
								data-caption="Vemos como anadir Javascript a nuestro documento html guardado en el head"
								src={anadirJavascript3}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AnadirJavascript2;
