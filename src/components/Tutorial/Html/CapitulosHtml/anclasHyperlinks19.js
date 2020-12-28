import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import anclasHyperlinks19 from '../../../../styles/img/capitulosPics/anclasHyperlinks19.jpg';
import anclasHyperlinks19b from '../../../../styles/img/capitulosPics/anclasHyperlinks19b.jpg';


class AnclasHyperlinks extends Component {
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
							<title>Codeando</title>
							<title>Anclas e Hyperlinks</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Anclas e Hyperlinks</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las etiquetas de anclaje se usan comunicar páginas web
							separadas entre si, pero también se pueden usar para vincular entre diferentes lugares en un
							solo documento, a menudo dentro de la tabla de contenido o incluso iniciar aplicaciones
							externas.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay que diferenciar entre ancla <code>&lt;a&gt;</code> y
							link <code>&lt;link&gt;</code>. Se utiliza una etiqueta de anclaje para crear lo que
							generalmente se denomina enlaces, pero un link no crea un enlace en el que se pueda hacer
							clic. Un link solo se puede usar en el encabezado <code>&lt;head&gt;</code> del documento y
							se usa para "vincular" otros recursos al documento. El uso más común es buscar hojas de
							estilo o scripts. El ancla solo se puede utilizar en el body.
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="550"
								height="150"
								alt="Anclas e hyperlinks"
								data-caption="anclas e hyperlinks"
								src={anclasHyperlinks19}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay una serie de atributos que se pueden añadir a los
							links son:
						</p>
						<br />
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;href</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica la dirección de destino. Puede
							ser una URL absoluta web como http://example.com/, o relativa, que apunta a otro directorio
							y / o documento dentro del mismo sitio web.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(En el documento, los servidores web
							normalmente devuelven el documento "index.html" dentro de ese directorio)
						</p>
						<br />
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;hreflang</h2>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica el idioma.</p>
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;rel</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica la relación entre el documento
							actual y el documento vinculado. Para HTML5, el los valores deben definirse en la
							especificación o registrarse en el wiki de Microformatos.
						</p>
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;target</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica dónde abrir el enlace, si en una
							nueva pestaña o ventana. Los valores posibles son _blank, _self, _parent, _top
						</p>
                        <div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="550"
								height="120"
								alt="Anclas e hyperlinks"
								data-caption="anclas e hyperlinks"
								src={anclasHyperlinks19b}
							/>
						</div>
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;title</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica información adicional sobre un
							enlace. La información se muestra con mayor frecuencia como texto de información sobre
							herramientas cuando el cursor se mueve sobre el enlace. Este atributo no está restringido a
							enlaces, se puede usar en casi todas las etiquetas HTML.
						</p>
						<h2 className="h2__tituloCapitulos">&nbsp;&nbsp;&nbsp;Download</h2>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especifica que el destino se descargará
							cuando un usuario haga clic en el hipervínculo. El valor del atributo será el nombre del
							archivo descargado. No hay restricciones en los valores permitidos, y el navegador detectará
							automáticamente la extensión de archivo correcta y la agregará al archivo (.img, .pdf,
							etc.). Si el navegador omite el valor, se utiliza el nombre de archivo original.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explicaremos más adelante.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AnclasHyperlinks;
