import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../../../styles/css/styles.css';
import ButtonBack from '../buttonBack';
import MenuApuntesHtml from '../MenuApuntes/Html/menuApuntesHtml';

import head7 from '../../../styles/img/capitulosPics/head7.jpg';

export default class RefHead extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Head</title>
					</Helmet>
				</div>
				<nav className="vertical_nav">
					<div className="left_section menu_left" id="">
						<div className="left_section">
							<MenuApuntesHtml />
						</div>
					</div>
				</nav>
				<div className="refHtml__body wrapper">
					<h1 className="refTitles__h2">
						<code>&lt;Head&gt;</code>
					</h1>
					<p>
						El elemento HTML <code>&lt;Head&gt;</code> se utiliza como contenedor de metadatos (datos sobre
						datos). Se utiliza entre la etiqueta <code>&lt;Html&gt;</code> y la etiqueta{' '}
						<code>&lt;body&gt;</code>.
					</p>
					<br />
					<p>
						Un encabezado HTML puede contener mucha información de metadatos o puede tener muy poca o
						ninguna información, depende de nuestros requisitos. Pero la parte principal tiene un papel
						crucial en un documento HTML al crear un sitio web. El elemento HTML <code>&lt;Head&gt;</code>{' '}
						se utiliza como contenedor de metadatos (datos sobre datos). Se utiliza entre la etiqueta{' '}
						<code>&lt;Html&gt;</code> y la etiqueta <code>&lt;body&gt;</code>.
					</p>
					<br />
					<p>
						El encabezado de un documento HTML es una parte cuyo contenido no se muestra en el navegador al
						cargar la página. Solo contiene metadatos sobre el documento HTML que especifica datos sobre el
						documento HTML.
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
					<ButtonBack />
				</div>
			</Fragment>
		);
	}
}
