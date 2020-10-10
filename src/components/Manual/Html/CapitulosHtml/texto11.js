import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import texto11 from '../../../../styles/img/capitulosPics/texto11.jpg';

class Texto extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Mostrando Texto</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Mostrando Texto</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si desea mostrar texto en HTML, puede usar un párrafo o
							un span:
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Los párrafos (<code>&lt;p&gt;</code>)
							contienen un bloque de texto plano.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <code>&lt;span&gt;</code> contiene
							fragmentos cortos de texto u otro HTML. Se usan para separar pequeñas piezas de contenido
							que están en la misma línea que otro contenido.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eche un vistazo a cada uno de estos elementos en acción
							a continuación:
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="650"
								height="350"
								alt="Mostrando el texto"
								data-caption="Mostrando el texto con p tag y span tag"
								src={texto11}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, hay dos <code>&lt;div&gt;</code>{' '}
							diferentes. El segundo <code>&lt;div&gt;</code> contiene un <code>&lt;p&gt;</code> con{' '}
							<code>&lt;span&gt;</code> Vehículos sin conductor <code>&lt;span&gt;</code>. Este elemento{' '}
							<code>&lt;span&gt;</code> separa los "automóviles autónomos" del resto del texto en el
							párrafo.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es mejor usar un elemento <code>&lt;span&gt;</code>{' '}
							cuando desee orientar un contenido específico que esté en línea o en la misma línea que otro
							texto. Si desea dividir su contenido en bloques, es mejor usar un <code>&lt;div&gt;</code>
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Texto;
