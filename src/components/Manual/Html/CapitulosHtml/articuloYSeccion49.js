import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import articuloYSeccion49 from '../../../../styles/img/capitulosPics/articuloYSeccion49.jpg';

class ArticuloYSeccion49 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Articulos y Secciones - Article and Section</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Articulos y Secciones</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ahora que cubrimos el cuerpo del HTML semántico, centrémonos en lo que puede ir en el cuerpo. Los dos elementos en los que nos vamos a centrar ahora son <code>&lt;seccion&gt;</code> y <code>&lt;article&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;section&gt;</code> define elementos en un documento, como capítulos, encabezados o cualquier otra área del documento con el mismo tema. Por ejemplo, el contenido con el mismo tema, como artículos sobre cricket, puede ir bajo una sola <code>&lt;section&gt;</code>. La página de inicio de un sitio web podría dividirse en secciones para la introducción, las noticias y la información de contacto.
                        </p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aquí hay un ejemplo de cómo usar <code>&lt;section&gt;</code>:
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;section&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;h2&gt;</code>Datos curiosos sobre Cricket<code>&lt;/h2&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;/section&gt;</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;article&gt;</code> contiene contenido que tiene sentido por sí solo. <code>&lt;article&gt;</code> puede contener contenido como artículos, blogs, comentarios, revistas, etc. Una etiqueta <code>&lt;article&gt;</code> ayudaría a alguien que usa un lector de pantalla a entender dónde está el contenido del artículo (que puede contener una combinación de texto, imágenes, audio, etc. ) comienza y termina.
						</p>
                        <br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aquí hay un ejemplo de cómo usar <code>&lt;article&gt;</code>:
						</p>
                        <div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Articulo y seccion"
								data-caption="Articulo y seccion"
								src={articuloYSeccion49}
							/>
						</div>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el código anterior, el elemento <code>&lt;article&gt;</code> que contiene un hecho sobre el cricket se colocó dentro del elemento <code>&lt;section&gt;</code>. Es importante tener en cuenta que un elemento <code>&lt;section&gt;</code> también se puede colocar en un elemento <code>&lt;article&gt;</code> dependiendo del contexto .
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ArticuloYSeccion49;
