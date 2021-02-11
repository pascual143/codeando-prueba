import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import float12 from '../../../../styles/img/capitulosPics/float12.jpg';

class Float12 extends Component {
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
							<title>Float - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Float</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El uso más básico de un float es que el
							texto se ajuste a una imagen. El siguiente código producirá dos párrafos y una imagen, con
							el segundo párrafo fluyendo alrededor de la imagen. Observe que siempre está contento
							después del elemento flotante que fluye alrededor del elemento flotante.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;float: none|left|right|initial|inherit;</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="500"
								alt="La propiedad de desbordamiento especifica qué debe suceder si el contenido se desborda en el cuadro de un elemento"
								data-caption="La propiedad de desbordamiento especifica qué debe suceder si el contenido se desborda en el cuadro de un elemento"
								src={float12}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Float12;
