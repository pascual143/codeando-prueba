import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import paddings9 from '../../../../styles/img/capitulosPics/paddings9.jpg';

class Paddings9 extends Component {
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
								Paddings - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Paddings o rellenos</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad de relleno establece el espacio
							de relleno en todos los lados de un elemento. El área de relleno es el espacio entre el
							contenido del elemento y su borde. No se permiten valores negativos.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para ahorrar agregar relleno a cada lado
							individualmente (usando padding-top, padding-left, etc.) puede escribirlo como una
							abreviatura, como se muestra a continuación:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="400"
								alt="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								data-caption="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								src={paddings9}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Cuatro Valores:</h1>
						<p>• padding-top</p>
						<p>• padding-right</p>
						<p>• padding-bottom</p>
						<p>• padding-left</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Paddings9;
