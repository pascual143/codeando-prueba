import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../../../styles/css/styles.css';
import ButtonBack from '../buttonBack';
import MenuApuntesHtml from '../MenuApuntes/Html/menuApuntesHtml';


import doctype from '../../../styles/img/capitulosPics/doctype.jpg';

export default class RefDoctype extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<meta charSet="utf-8" />
						<title>Codeando</title>
						<title>Doctype HTML. Aprende codigo con TandGo html css javascript jquery bootstrap blog digital marketing programar web</title>
					</Helmet>
				</div>
				<nav className="vertical_nav">
					<div className="left_section menu_left" id="">
						<div className="left_section">
							<MenuApuntesHtml />
						</div>
					</div>
					</nav>
				<nav className="vertical_nav" />
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
