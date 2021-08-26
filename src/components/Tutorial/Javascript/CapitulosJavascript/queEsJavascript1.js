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
						<h1 className="h1__tituloCapitulos">Introduccion a JavaScript</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si HTML es el lenguaje de marcado que usamos
							para estructurar y dar significado a nuestro contenido web y, CSS es un lenguaje de reglas
							de estilo que usamos para estilizar nuestro contenido HTML, JavaScript es la parte logica de
							una pagina web, con la interactuamos. JavaScript es un lenguaje de secuencias de comandos
							que te permite crear contenido de actualización dinámica, controlar multimedia, animar
							imágenes y prácticamente todo lo demás.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript sirve para que en una página web
							se consiga un mayor índice de interactividad con los usuarios y, por tanto, la experiencia
							de estos sea mucho mejor y más enriquecida. Es algo que se emplea para dotar de más
							funciones, facilitar la comunicación y, además, otorgar todas las mejoras posibles sin
							apenas incidir en el peso de la página, lo que garantiza una mayor velocidad de carga y una
							mejor reputación a ojos de Google.
						</p>
						<br />
						<h1 className="h1__tituloCapitulos">Que es JavaScript?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript (js) es un lenguaje de
							programación ligero orientado a objetos que es utilizado por varios sitios web para crear
							scripts en las páginas web. Es un lenguaje de programación interpretado y completo que
							permite la interactividad dinámica en sitios web cuando se aplica a un documento HTML. Fue
							introducido en el año 1995 para agregar programas a las páginas web en el navegador Netscape
							Navigator. Desde entonces, ha sido adoptado por todos los demás navegadores web gráficos.
							Con JavaScript, los usuarios pueden crear aplicaciones web modernas para interactuar
							directamente sin tener que volver a cargar la página cada vez. El sitio web tradicional
							utiliza js para proporcionar varias formas de interactividad y simplicidad.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript no es un lenguaje compilado, pero
							es un lenguaje traducido. El traductor de JavaScript (incrustado en el navegador) es
							responsable de traducir el código JavaScript para el navegador web.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript es un lenguaje de secuencias de
							comandos basado en objetos cuyo intérprete está integrado en el software del navegador web,
							como Microsoft Internet Explorer, Mozilla Firefox, Opera y Safari.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No hay que confundir Java con JavaScript.</p>
						<br />
						<h1 className="h1__tituloCapitulos">Caracteristicas de JavaScript?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existen las siguientes características de
							JavaScript:
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Todos los navegadores web
							populares admiten JavaScript, ya que proporcionan entornos de ejecución integrados.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript sigue la sintaxis y
							estructura del lenguaje de programación C. Por tanto, es un lenguaje de programación
							estructurado.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript es un lenguaje de
							tipado débil, donde ciertos tipos se emiten implícitamente (dependiendo de la operación).
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript es un lenguaje de
							programación orientado a objetos que usa prototipos en lugar de usar clases para la
							herencia.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Es un lenguaje ligero e
							interpretado.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Es un lenguaje que distingue
							entre mayúsculas y minúsculas.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript es compatible con
							varios sistemas operativos, incluidos Windows, macOS, etc.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Proporciona un buen control a
							los usuarios sobre los navegadores web.
						</p>
						<br />
						<h1 className="h1__tituloCapitulos">Caracteristicas de JavaScript?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript se utiliza para crear sitios web
							interactivos. Se utiliza principalmente para:{' '}
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Validación del lado del
							cliente,
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Menús desplegables dinámicos,
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Visualización de fecha y hora,
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Mostrar ventanas emergentes y
							cuadros de diálogo (como un cuadro de diálogo de alerta, cuadro de diálogo de confirmación y
							cuadro de diálogo de solicitud),
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Visualización de relojes, etc.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default QueEsJavascript;