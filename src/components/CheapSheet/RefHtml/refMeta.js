import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../../../styles/css/styles.css';
import ButtonBack from '../buttonBack';

// import head7 from '../../../styles/img/capitulosPics/head7.jpg';

export default class RefMeta extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Meta</title>
					</Helmet>
				</div>
				<div className="refHtml__body wrapper">
					<h1 className="refTitles__h2">
						<code>&lt;Meta&gt;</code>
					</h1>
					<p>
						La etiqueta HTML <code>&lt;meta&gt;</code> se utiliza para representar los metadatos sobre el
						documento HTML. Especifica descripción de la página, palabras clave, derechos de autor, idioma,
						autor de los documentos, etc.
					</p>
					<br />
					<p>
						Los metadatos no se muestran en la página web, pero son utilizados por motores de búsqueda,
						navegadores y otros servicios web que escanean el sitio o la página web para conocer la página
						web.
					</p>
					<br />
					<p>
						Con la ayuda de la metaetiqueta, puede experimentar y obtener una vista previa de cómo se
						representará su página web en el navegador.
					</p>
					<br />
					<p>
						La etiqueta <code>&lt;meta&gt;</code> se coloca dentro de la etiqueta <code>&lt;head&gt;</code>{' '}
						y se puede usar más de una vez en un documento.{' '}
					</p>
					<br />
					{/* <div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="750"
								height="400"
								alt="Head o encabezado esta encima del body y contiene informacion importante como los titulos o los metadatos"
								data-caption="Head o encabezado esta encima del body y contiene informacion importante como los titulos o los metadatos"
								src={head7}
							/>
						</div> */}
					<ButtonBack />
				</div>
			</Fragment>
		);
	}
}
