import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import imagenesHyperlinks22 from '../../../../styles/img/capitulosPics/imagenesHyperlinks22.jpg';

class ImagenesHyperlink extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Imagenes como Hyperlinks</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Imagenes como Hyperlinks</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Habras visto tal vez sitios donde todo es texto y la
							imagen es clickeable.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasta ahora, hemos agregado enlaces compuestos solo de
							texto, como los siguientes:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>
								&lt;a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"&gt; Nopal &lt;/a&gt;
							</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Afortunadamente, HTML le permite convertir casi
							cualquier elemento en un enlace envolviendo ese elemento con un elemento de anclaje. Con
							esta técnica, es posible convertir imágenes en enlaces simplemente envolviendo el elemento{' '}
							<code>&lt;img&gt;</code> con un elemento <code>&lt;a&gt;</code>.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '70%' }}>
							<img
								className="materialboxed"
								width="900"
								height="150"
								alt="Imagenes como hyperlinks son utilizados muy a menudo y dan un resultado llamativo"
								data-caption="Imagenes como hyperlinks son utilizados muy a menudo y dan un resultado llamativo"
								src={imagenesHyperlinks22}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Como ves, añadir enlaces a las imágenes nos da bastante
							flexibilidad a la hora de desarrollar nuestra página
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ImagenesHyperlink;
