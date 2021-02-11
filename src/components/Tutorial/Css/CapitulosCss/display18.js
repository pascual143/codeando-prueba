import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import display18 from '../../../../styles/img/capitulosPics/display18.jpg';
import display18a from '../../../../styles/img/capitulosPics/display18a.jpg';


class Display18 extends Component {
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
								Display - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Display - Visualización</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La visualización de CSS es la propiedad más
							importante de CSS que se utiliza para controlar el diseño del elemento. Especifica cómo se
							muestra el elemento.
						</p>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cada elemento tiene un valor de
							visualización predeterminado según su naturaleza. Cada elemento de la página web es un
							cuadro rectangular y la propiedad CSS define el comportamiento de ese cuadro rectangular.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							display: inline;
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							display: inline-block;
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							display: block;
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							display: run-in;
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•
							display: none;
						</p>

						<h1 className="h1__tituloCapitulos">Display de CSS inline(en línea)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento en línea toma solo el ancho
							requerido. No fuerza el salto de línea para que el flujo de texto no se interrumpa en el
							ejemplo en línea.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="Display o visualizacion"
								data-caption="Display o visualizacion"
								src={display18}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Inline-block de display CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento de bloque en línea de
							visualización CSS es muy similar al elemento en línea, pero la diferencia es que puede
							establecer el ancho y la altura.
						</p>
						<h1 className="h1__tituloCapitulos">Block de display CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento de bloque de visualización CSS
							ocupa tanto espacio horizontal como sea posible. Significa que el elemento de bloque toma
							todo el ancho disponible. Hacen un salto de línea antes y después de ellos.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="Display o visualizacion block o en bloque"
								data-caption="Display o visualizacion block o en bloque"
								src={display18a}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">CSS display none(ninguno)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El valor "ninguno" elimina totalmente el elemento de la página. No ocupará ningún espacio.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Display18;
