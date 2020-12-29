import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import doctype from '../../../../styles/img/capitulosPics/doctype.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class NormasStandar extends Component {
	render() {
		return (
			<Fragment>
				<div className="">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Normas standar de los documentos HTML</title>
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
						<h1 className="h1__tituloCapitulos">Normas standar de los documentos HTML</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preparándose para HTML, es hora de aprender
							cómo configurar un archivo HTML.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los archivos HTML requieren ciertos
							elementos para configurar el documento correctamente. Puede informar a los navegadores web
							que está utilizando HTML comenzando su documento con una declaración de tipo de documento.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esta declaración se ve así:</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="250"
								alt="Normas standar de los documentos Html"
								data-caption="doctype es la expresion para especificar al navegador de que tipo de documento se trata"
								src={doctype}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esta declaración es una instrucción y debe
							ser la primera línea de código en su documento HTML. Le dice al navegador qué tipo de
							documento esperar, junto con qué versión de HTML se está utilizando en el documento. Por
							ahora, el navegador supondrá correctamente que el html. En DOCTYPE html se refiere a HTML5,
							ya que es el estándar actual.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por último, el código HTML siempre se guarda
							en un archivo con una extensión .html. Su archivo principal suele ser index.html.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default NormasStandar;
