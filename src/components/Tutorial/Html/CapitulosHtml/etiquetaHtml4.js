import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import doctype from '../../../../styles/img/capitulosPics/doctype.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EtiquetaHtml extends Component {
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
							<title>La etiqueta HTML</title>
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
						<h1 className="h1__tituloCapitulos">La etiqueta HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La declaración{' '}
							<code>&lt;!DOCTYPE html&gt;</code> proporciona al navegador dos datos (el tipo de documento
							y la versión HTML que se espera), pero en realidad no agrega ninguna estructura o contenido
							HTML.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para crear contenido y estructura HTML,
							debemos agregar etiquetas de apertura y cierre <code>&lt;html&gt;</code> después de declarar{' '}
							<code>&lt;!DOCTYPE html&gt;</code>:
						</p>
						<br />
						<div style={{ margin: 'auto', width: '80%' }}>
							<img
								className="materialboxed"
								width="450"
								height="350"
								alt="La etiqueta Html"
								data-caption="doctype es la expresion para especificar al navegador de que tipo de documento se trata"
								src={doctype}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento HTML <code>&lt;html&gt;</code>{' '}
							(o elemento HTML raiz) representa la raiz de un documento HTML. El resto de elementos
							descienden de este elemento. Dado que el elemento <code>&lt;html&gt;</code> es el primero en
							un documento, aparte de los comentarios, se llama el elemento raíz.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por último, el código HTML siempre se guarda
							en un archivo con una extensión .html. Su archivo principal suele ser index.html.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EtiquetaHtml;
