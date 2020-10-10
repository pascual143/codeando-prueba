import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import head7 from '../../../../styles/img/capitulosPics/head7.jpg';

class Head extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Encabezados de la pagina web - Head</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">"Head" - Encabezado de secciones</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasta ahora has hecho dos cosas para
							configurar el archivo correctamente:
							<code>&lt;head&gt;</code>.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Declarado
							al navegador que su código es HTML con <code>&lt;! DOCTYPE html&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) Se agregó
							el elemento HTML (<code>&lt;html&gt;</code>) que contendrá el resto de su código.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahora, también proporcionemos al navegador
							información sobre la página en sí.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podemos hacer esto agregando un elemento{' '}
							<code>&lt;head&gt;</code>.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;head&gt;</code> va por
							encima de nuestro elemento <code>&lt;body&gt;</code>.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;head&gt;</code>{' '}
							contiene los metadatos de una página web. Los metadatos son información sobre la página que
							no se muestra directamente en la página web y provee informtacion importante para los
							motores de busqueda. A diferencia de la información dentro de la etiqueta{' '}
							<code>&lt;body&gt;</code>, los metadatos en el encabezado son información sobre la página en
							sí.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el HEAD tambien se suelen incluir
							scripts, hojas de estilos y links a otras librerias.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las etiquetas de encabezado de apertura y
							cierre generalmente aparecen como el primer elemento después de su primera etiqueta HTML:
						</p>
                        <br />
						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="750"
								height="400"
								alt="Head o encabezado esta encima del body y contiene informacion importante como los titulos o los metadatos"
								data-caption="Head o encabezado esta encima del body y contiene informacion importante como los titulos o los metadatos"
								src={head7}
							/>
						</div>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;De momento no os preocupeis por el significado de los metadatos y los links, 
                            ya que lo explicaremos mas adelante.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Head;
