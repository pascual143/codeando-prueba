import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import estilosTexto12 from '../../../../styles/img/capitulosPics/estilosTexto12.jpg';
import estilosTexto12b from '../../../../styles/img/capitulosPics/estilosTexto12b.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EstilosTexto extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Estilos de Texto - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Estilos de Texto</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;También puede aplicar estilo al texto con etiquetas
							HTML.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La etiqueta <code>&lt;em&gt;</code> enfatiza el texto,
							mientras que la etiqueta <code>&lt;strong&gt;</code> resalta el texto importante.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Más tarde, cuando comience a diseñar sitios web,
							decidirá cómo desea que los navegadores muestren contenido dentro de las etiquetas{' '}
							<code>&lt;em&gt;</code> y <code>&lt;strong&gt;</code>. Sin embargo, los navegadores tienen
							hojas de estilo integradas que generalmente diseñarán estas etiquetas de las siguientes
							maneras:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• La etiqueta <code>&lt;em&gt;</code>{' '}
							generalmente se representará con énfasis en cursiva.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• El <code>&lt;strong&gt;</code>{' '}
							generalmente se mostrará como énfasis en negrita. Echa un vistazo a cada estilo en acción:
						</p>
						<br />
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="550"
								alt="Estilos de texto"
								data-caption="strong y em tags para pasar estilos al texto"
								src={estilosTexto12}
							/>
						</div>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros estilos de texto son:</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;b&gt;</code> - Texto en negrita(bold)
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;i&gt;</code> - Texto Italic
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;mark&gt;</code> - Texto marcado
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;small&gt;</code> - Texto reducido
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;del&gt;</code> - Texto borrado
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;ins&gt;</code> - Texto insertado
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;sub&gt;</code> - Texto subscripto
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;sup&gt;</code> - Teto sobreescrito
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="350"
								alt="Estilos de texto"
								data-caption="Ejemplos del resto de los estilos de texto"
								src={estilosTexto12b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EstilosTexto;
