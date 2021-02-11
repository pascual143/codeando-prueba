import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import overflow11 from '../../../../styles/img/capitulosPics/overflow11.jpg';

class Overflow11 extends Component {
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
								Overflow - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Overflow</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad de desbordamiento especifica
							qué debe suceder si el contenido se desborda en el cuadro de un elemento.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esta propiedad especifica si se recorta el
							contenido o se agregan barras de desplazamiento cuando el contenido de un elemento es
							demasiado grande para caber en un área específica.
						</p>
						<p>• Visible: Muestra todo el contenido desbordado fuera del elemento.</p>
						<p>• Scroll: Oculta el contenido desbordado y agrega una barra de desplazamiento.</p>
						<p>
							• Hidden: Oculta el contenido desbordado, ambas barras de desplazamiento desaparecen y la
							página se fija.
						</p>
						<p>
							• Auto: Igual que el desplazamiento si el contenido se desborda, pero no agrega una barra de
							desplazamiento si el contenido se ajusta.
						</p>
						<p>• Inherit: Heredar el valor del elemento padre para esta propiedad</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="400"
								alt="La propiedad de desbordamiento especifica qué debe suceder si el contenido se desborda en el cuadro de un elemento"
								data-caption="La propiedad de desbordamiento especifica qué debe suceder si el contenido se desborda en el cuadro de un elemento"
								src={overflow11}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Overflow11;
