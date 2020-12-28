import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import mainYPiePagina48 from '../../../../styles/img/capitulosPics/mainYPiePagina48.jpg';

class MainYPiePagina48 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Hacer coincidir un Patron</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Hacer coincidir un Patron</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dos elementos estructurales más son{' '}
							<code>&lt;main&gt;</code> y <code>&lt;footer&gt;</code>. Estos elementos junto con{' '}
							<code>&lt;nav&gt;</code> y <code>&lt;header&gt;</code> ayudan a describir dónde se encuentra
							un elemento según los estándares de desarrollo web convencionales.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;main&gt;</code> se usa para
							encapsular el contenido dominante dentro de una página web. Esta etiqueta es independiente
							del <code>&lt;footer&gt;</code> y el <code>&lt;nav&gt;</code> de una página web, ya que
							estos elementos no contienen el contenido principal. Al usar <code>&lt;main&gt;</code>en
							lugar de un elemento <code>&lt;div&gt;</code>, los lectores de pantalla y los navegadores
							web pueden identificar mejor que lo que está dentro de la etiqueta es la mayor parte del
							contenido.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entonces, ¿cómo se ve <code>&lt;main&gt;</code> cuando
							se incorpora a nuestro código? Esa es una gran pregunta.
						</p>
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="650"
								height="250"
								alt="Main y pie de pagina"
								data-caption="Main y pie de pagina"
								src={mainYPiePagina48}
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

export default MainYPiePagina48;
