import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import htmlStructure from '../../../../styles/img/capitulosPics/htmlStructure.jpg'
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class queEsHtml extends Component {
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
							<title>Que es Html ? Codeando, aprende codigo con codeando. HTML css Javascript bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Que es Html?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML es el esqueleto de todas las páginas
							web. A menudo es el primer idioma que aprenden los especialistas en marketing y diseñadores,
							y es fundamental para el trabajo de desarrollo front-end.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aprender HTML es el primer paso para crear
							sitios web. Puedes ayudarte a crear código en blogs o plantillas de sitios web. A medida que
							continues aprendiendo, puedes superponer HTML con CSS y JavaScript para crear sitios web
							visualmente atractivos y dinámicos. Pero por ahora, nos centraremos en cómo agregar y
							modificar contenido básico en una página, como texto, imágenes y videos.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML o Lenguaje de Marcado de Hipertexto,
							utiliza un sistema de marcado, compuesto de elementos que representan contenido. El marcado
							significa que con HTML declaras lo que se presenta a un espectador, pero no cómo se
							presenta. Las representaciones visuales se definen mediante hojas de estilo en cascada (CSS)
							y se realizan mediante navegadores.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML a veces se llama un lenguaje de
							programación pero no tiene lógica, por lo que es un lenguaje de marcado.{' '}
						</p>
						<br />						
						<div style={{margin: "auto", width: "50%"}}>
							<img width={400} height={300} alt="La estructura basica en html consta de elementos divisores" data-caption="La estructura basica en html consta de elementos divisores" src={htmlStructure} />
						</div>
						<div>
							<iframe 
								title="prueba"
								width="420" 
								height="315"
								src="https://www.youtube.com/embed/tgbNymZ7vqY">
							</iframe>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default queEsHtml;
