import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialJavaScript from '../../../MenusTutorial/JavaScript/menuTutorialJavaScript';
import outputjavascript1 from '../../../../styles/img/capitulosPics/outputjavascript1.jpg';
import outputjavascript2 from '../../../../styles/img/capitulosPics/outputjavascript2.jpg';
import outputjavascript3 from '../../../../styles/img/capitulosPics/outputjavascript3.jpg';
import outputjavascript4 from '../../../../styles/img/capitulosPics/outputjavascript4.jpg';
import outputjavascript5 from '../../../../styles/img/capitulosPics/outputjavascript5.jpg';

class OutputJavascript3 extends Component {
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
								Output o salida de Javascript - TandGo - Aprende a programar con Html Css JavaScript
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
						<h1 className="h1__tituloCapitulos">Output o salida de JavaScript</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posibilidades de visualización de
							JavaScript. JavaScript puede "mostrar" datos de diferentes formas:
						</p>
						<p>&nbsp;&nbsp;• Escribir en un elemento HTML, utilizando innerHTML.</p>
						<p>&nbsp;&nbsp;• Escribiendo en la salida HTML usando document.write ().</p>
						<p>&nbsp;&nbsp;• Escribiendo en un cuadro de alerta, usando window.alert ().</p>
						<p>&nbsp;&nbsp;• Escribiendo en la consola del navegador, usando console.log ().</p>
                        <br />
						<h1 className="h1__tituloCapitulos">Usando innerHTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para acceder a un elemento HTML, JavaScript
							puede usar el método document.getElementById (id).
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo id define el elemento HTML. La
							propiedad innerHTML define el contenido HTML:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="400"
								alt="Salida o output de JavaScript usando innerHTML"
								data-caption="Salida o output de JavaScript usando innerHTML"
								src={outputjavascript1}
							/>
						</div>
						<br />
						<h1 className="h1__tituloCapitulos">Usando document.write ()</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para propósitos de prueba, es conveniente
							usar document.write ():
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="450"
								alt="Salida o output de JavaScript usando document.write()"
								data-caption="Salida o output de JavaScript usando document.write()"
								src={outputjavascript2}
							/>
						</div>
                        <br />
						<h1 className="h1__tituloCapitulos">Usando window.alert ()</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puede utilizar un cuadro de alerta para
							mostrar datos:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="450"
								alt="Salida o output de JavaScript usando window.alert ()"
								data-caption="Salida o output de JavaScript usando window.alert ()"
								src={outputjavascript3}
							/>
						</div>
						<br />
						<h1 className="h1__tituloCapitulos">Usando console.log ()</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para fines de depuración, puede llamar al
							método console.log () en el navegador para mostrar datos.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="400"
								alt="Salida o output de JavaScript usando console.log ()"
								data-caption="Salida o output de JavaScript usando console.log ()"
								src={outputjavascript4}
							/>
						</div>
						<br />
						<h1 className="h1__tituloCapitulos">Print Javascript, Impresión de JavaScript</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript no tiene ningún objeto de
							impresión ni métodos de impresión.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No puede acceder a los dispositivos de
							salida desde JavaScript.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La única excepción es que puede llamar al
							método window.print () en el navegador para imprimir el contenido de la ventana actual.
						</p>

						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Salida o output de JavaScript usando print"
								data-caption="Salida o output de JavaScript usando print"
								src={outputjavascript5}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default OutputJavascript3;
