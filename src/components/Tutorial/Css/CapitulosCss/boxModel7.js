import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import modeloCaja7 from '../../../../styles/img/capitulosPics/modeloCaja7.jpg';
import modeloCaja7a from '../../../../styles/img/capitulosPics/modeloCaja7a.jpg';

class BoxModel7 extends Component {
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
								El Modelo de Caja(The Box Model) - TandGo - Aprende a programar con Html Css JavaScript
								jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">El Modelo de Caja(The Box Model)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El modelo de cajas o "box model" es
							seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que
							condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de
							CSS que hace que todos los elementos de las páginas se representen mediante cajas
							rectangulares.
						</p>

						<h1 className="h1__tituloCapitulos">Los Bordes</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El navegador crea un rectángulo para cada
							elemento del documento HTML. El modelo de caja describe cómo el relleno, el borde y el
							margen se agregan al contenido para crear este rectángulo.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="600"
								alt="El modelo de caja"
								data-caption="El modelo de caja"
								src={modeloCaja7}
							/>
						</div>
						<p>• Contenido : el contenido del cuadro, donde aparecen el texto y las imágenes.</p>
						<p>• Relleno : limpia un área alrededor del contenido. El acolchado es transparente</p>
						<p>• Borde : un borde que rodea el relleno y el contenido.</p>
						<p>• Margen : borra un área fuera del borde. El margen es transparente</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="200"
								alt="El modelo de caja"
								data-caption="El modelo de caja"
								src={modeloCaja7a}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BoxModel7;
