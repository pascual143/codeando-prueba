import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import grid21 from '../../../../styles/img/capitulosPics/grid21.jpg';
import grid21a from '../../../../styles/img/capitulosPics/grid21a.jpg';
import grid21b from '../../../../styles/img/capitulosPics/grid21b.jpg';


class Grid22 extends Component {
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
							<title>Grid - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Grid</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El diseño de cuadrícula es un nuevo y
							poderoso sistema de diseño CSS que permite dividir el contenido de una página web en filas y
							columnas de una manera fácil.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La forma más sencilla de definir la
							estructura de marcado anterior como una cuadrícula es simplemente establecer su propiedad de
							visualización en cuadrícula:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="Grid es el diseno de cuadricula del navegador"
								data-caption="Grid"
								src={grid21}
							/>
						</div>
						<p>
							Sin embargo, hacer esto invariablemente hará que todos los elementos secundarios se colapsen
							uno encima del otro. Esto se debe a que los niños actualmente no saben cómo posicionarse
							dentro de la cuadrícula. Pero podemos decirles explícitamente.
						</p>
						<p>
							Primero necesitamos decirle al elemento de la cuadrícula .container cuántas filas y columnas
							formarán su estructura y podemos hacerlo usando las propiedades de las columnas de la
							cuadrícula y las filas de la cuadrícula (observe la pluralización):
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="200"
								alt="Grid es el diseno de cuadricula del navegador"
								data-caption="Grid"
								src={grid21a}
							/>
						</div>

						<p>
							Sin embargo, eso todavía no nos ayuda mucho porque necesitamos dar un orden a cada elemento
							hijo. Podemos hacer esto especificando los valores de la fila de la cuadrícula y la columna
							de la cuadrícula que le dirán dónde se encuentra en la cuadrícula:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="600"
								alt="Grid es el diseno de cuadricula del navegador"
								data-caption="Grid"
								src={grid21b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Grid22;
