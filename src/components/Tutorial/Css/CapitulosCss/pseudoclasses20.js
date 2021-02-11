import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import pseudoclasses20 from '../../../../styles/img/capitulosPics/pseudoclasses20.jpg';
import pseudoclasses20a from '../../../../styles/img/capitulosPics/pseudoclasses20a.jpg';
import pseudoclasses20b from '../../../../styles/img/capitulosPics/pseudoclasses20b.jpg';

class Pseudoclasses20 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" />
							<meta
								name="keywords"
								content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender"
							/>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>TandGo</title>
							<title>
								Pseudoclasses - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
							</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section" style={{ margin: '10px' }}>
								<MenuTutorialCss />
							</div>
						</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Que son las Pseudo-classes?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Una pseudoclase se usa para definir un
							estado especial de un elemento.
						</p>

						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por ejemplo, se puede utilizar para:</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							Aplicar estilo a un elemento cuando un usuario pasa el mouse sobre él
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							Estilo de enlaces visitados y no visitados de manera diferente
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							Aplicar estilo a un elemento cuando se enfoca
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="200"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={pseudoclasses20}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Anchor Pseudo-classes</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los enlaces se pueden mostrar de diferentes
							formas:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="600"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={pseudoclasses20a}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">
							Hover on <code>&lt;div&gt;</code>
						</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Significa que cuando ponemos nuestro cursor
							encima del elemento aplica clase que le indicamos.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un ejemplo del uso de la pseudoclase es:
							hover(pasar por encima) sobre un elemento <code>&lt;div&gt;</code>, y cambiara el color de
							fondo a azul:
						</p>

						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="390"
								height="200"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={pseudoclasses20b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Pseudoclasses20;
