import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import tablas23 from '../../../../styles/img/capitulosPics/tablas23.jpg';
import tablas23a from '../../../../styles/img/capitulosPics/tablas23a.jpg';
import tablas23b from '../../../../styles/img/capitulosPics/tablas23b.jpg';
import tablas23c from '../../../../styles/img/capitulosPics/tablas23c.jpg';
import tablas23d from '../../../../styles/img/capitulosPics/tablas23d.jpg';
import tablas23e from '../../../../styles/img/capitulosPics/tablas23e.jpg';


class Tablas23 extends Component {
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
								Tablas - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Tablas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad table-layout cambia el
							algoritmo que se utiliza para el diseño de una tabla.
						</p>
						<h1 className="h1__tituloCapitulos">Bordes de las Tablas</h1>

						<p>Para especificar los bordes de la tabla en CSS, use la propiedad border.</p>
						<p>
							El siguiente ejemplo especifica un borde negro para los elementos <code>&lt;table&gt;</code>,{' '}
							<code>&lt;th&gt;</code> y <code>&lt;td&gt;</code>:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="480"
								alt="Anadiendo bordes a la tabla"
								data-caption="Anadiendo bordes a la tabla"
								src={tablas23}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Tabla con el ancho completo(Full-Width Table)</h1>

						<p>
							La tabla anterior puede parecer pequeña en algunos casos. Si necesita una tabla que deba
							abarcar toda la pantalla (ancho completo), agregue ancho: 100% al elemento{' '}
							<code>&lt;table&gt;</code>:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="250"
								height="450"
								alt="Anadiendo bordes a la tabla. Full-Width table"
								data-caption="Anadiendo bordes a la tabla. Full-Width table"
								src={tablas23a}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Collapse Table Borders</h1>

						<p>
							La propiedad border-collapse establece si los bordes de la tabla deben colapsarse en un solo
							borde:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="400"
								alt="Collapse Table Borders"
								data-caption="Collapse Table Borders"
								src={tablas23b}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Table Width and Height</h1>

						<p>El ancho y alto de una tabla se definen por las propiedades de ancho y alto.</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="200"
								alt="Collapse Table Borders"
								data-caption="Collapse Table Borders"
								src={tablas23c}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Alineamineto Horizontal</h1>

						<p>
							La propiedad text-align establece la alineación horizontal (como izquierda, derecha o
							centro) del contenido en <code>&lt;th&gt;</code> o <code>&lt;td&gt;</code>.
						</p>
						<p>
							De forma predeterminada, el contenido de los elementos <code>&lt;th&gt;</code> está alineado
							al centro y el contenido de los elementos <code>&lt;td&gt;</code> está alineado a la
							izquierda.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="300"
								alt="Collapse Table Borders"
								data-caption="Collapse Table Borders"
								src={tablas23d}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">Alineamineto vertical</h1>

						<p>
                            La propiedad de alineación vertical establece la alineación vertical (como la parte superior, inferior o media) del contenido en <code>&lt;th&gt;</code> o <code>&lt;td&gt;</code>.
						</p>
						<p>
                            De forma predeterminada, la alineación vertical del contenido de una tabla es intermedia 
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="300"
								alt="Alineamineto vertical"
								data-caption="Alineamineto vertical"
								src={tablas23e}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Tablas23;
