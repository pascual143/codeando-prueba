import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import divs6 from '../../../../styles/img/capitulosPics/divs6.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class Divs extends Component {
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
							<title>Divisores de secciones divs</title>
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
						<h1 className="h1__tituloCapitulos">"Divs" - Divisores de secciones</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uno de los elementos más populares en HTML
							es el elemento <code>&lt;div&gt;</code>.&nbsp;
							<code>&lt;div&gt;</code> es la abreviatura de "división" o contenedor, que divide la página
							en secciones. Es un elemento contenedor que encapsula otros elementos, tantos como desees(links, 
                            imagenes, tablas, forms, etcetera). 
						</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estas secciones son muy útiles para agrupar elementos en 
                            su HTML y para anadir hojas de estilos. &nbsp;Puedes incluir tantos elementos dentro de un div 
                            como quieras.
                        </p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No tienen efecto sobre el contenido o el
							layout hasta que se utilizan los estilos CSS. Como contenedor "puro", el elemento{' '}
							<code>&lt;div&gt;</code> no representa nada. En su lugar, se usa para agrupar contenido para
							que se pueda diseñar fácilmente usando los atributos class o id, marcando una sección de un
							documento como escrita en un idioma diferente (usando el atributo lang), y así
							sucesivamente.
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="350"
								alt="Divs"
								data-caption="divs son los divisores del contenido y forman parte de la estructura html."
								src={divs6}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los <code>&lt;div&gt;</code> pueden contener cualquier texto u otros elementos de  HTML, como enlaces, imágenes o videos. 
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Divs;
