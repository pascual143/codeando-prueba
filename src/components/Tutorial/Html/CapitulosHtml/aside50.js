import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import aside50 from '../../../../styles/img/capitulosPics/aside50.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class Aside50 extends Component {
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
							<title>Elemento Aside - Article and Section - Aprender codigo con Codeando Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Elemento Aside</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;aside&gt;</code> se usa para marcar información adicional que puede mejorar otro elemento, pero no es necesario para comprender el contenido principal. Este elemento se puede usar junto con otros elementos como <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code>. Algunos usos comunes del elemento <code>&lt;aside&gt;</code> son para:
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notas finales
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comentarios
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informacion adicional
						</p>
                        <br />
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aquí hay un ejemplo de <code>&lt;aside&gt;</code> que se usa junto con <code>&lt;article&gt;</code>:
						</p>
						<br />
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="450"
								alt="Main y pie de pagina"
								data-caption="Main y pie de pagina"
								src={aside50}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Como vemos arriba, <code>&lt;main&gt;</code> contiene
							una etiqueta <code>&lt;article&gt;</code> y <code>&lt;header&gt;</code> con elementos
							secundarios que contienen la información más importante relacionada con la página.
						</p>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informacion de contacto</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informacion registrada</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Términos de Uso</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mapa del sitio</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Referencia a los enlaces de la parte superior de la
							página
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por ejemplo:</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;Footer&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;p&gt;</code>Envíeme un correo electrónico a
							Codey@Codecademy.com <code>&lt;/p&gt;</code>
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;/Footer&gt;</code>
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, el pie de página se usa para
							contener información de contacto. La etiqueta <code>&lt;footer&gt;</code> está separada del
							elemento <code>&lt;main&gt;</code> y normalmente se encuentra en la parte inferior del
							contenido.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Aside50;
