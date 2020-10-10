import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../../styles/css/styles.css';
import ButtonBack from '../buttonBack';

// import doctype from '../../../styles/img/capitulosPics/doctype.jpg';

export default class RefHtml2 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>HTML</title>
					</Helmet>
				</div>
				<div className="refHtml__body wrapper">
					<h1 className="refTitles__h2">
						<code>&lt;html&gt;</code>
					</h1>
					<p>Las etiquetas HTML son como palabras clave que definen cómo el navegador web formateará y mostrará el contenido. Con la ayuda de etiquetas, un navegador web puede distinguir entre un contenido HTML y un contenido simple. Las etiquetas HTML contienen tres partes principales: etiqueta de apertura, contenido y etiqueta de cierre. Pero algunas etiquetas HTML son etiquetas no cerradas.</p>
                    <br />
                    <p>Cuando un navegador web lee un documento HTML, el navegador lo lee de arriba a abajo y de izquierda a derecha. Las etiquetas HTML se utilizan para crear documentos HTML y representar sus propiedades. Cada etiqueta HTML tiene propiedades diferentes.</p>
                    <br />
                    <p>Un archivo HTML debe tener algunas etiquetas esenciales para que el navegador web pueda diferenciar entre un texto simple y un texto HTML. Puede utilizar tantas etiquetas como desee según los requisitos de su código.</p>
					{/* <div style={{ margin: 'auto', width: '50%' }}>
						<img
							className="materialboxed"
							width="350"
							height="250"
							alt="La etiqueta Html"
							data-caption="doctype es la expresion para especificar al navegador de que tipo de documento se trata"
							src={doctype}
						/>
					</div> */}
                    <ButtonBack />
				</div>
			</Fragment>
		);
	}
}
