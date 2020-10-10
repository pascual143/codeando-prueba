import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../../../styles/css/styles.css';
import ButtonBack from '../buttonBack';

import doctype from '../../../styles/img/capitulosPics/doctype.jpg';

export default class RefDoctype extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Doctype HTML</title>
					</Helmet>
				</div>
				<div className="refHtml__body wrapper">
					<h1 className="refTitles__h2">
						<code>&lt;DOCTYPE!&gt;</code>
					</h1>
					<p>Define la version usada en el documento. En este caso es HTML5</p>
					<br />
					<div style={{ margin: 'auto', width: '50%' }}>
						<img
							className="materialboxed"
							width="350"
							height="250"
							alt="La etiqueta Html"
							data-caption="doctype es la expresion para especificar al navegador de que tipo de documento se trata"
							src={doctype}
						/>
					</div>
                    <ButtonBack />
				</div>
			</Fragment>
		);
	}
}
