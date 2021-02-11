import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import tranformaciones2D26 from '../../../../styles/img/capitulosPics/tranformaciones2D26.jpg';
import tranformaciones2D26a from '../../../../styles/img/capitulosPics/tranformaciones2D26a.jpg';
import tranformaciones2D26b from '../../../../styles/img/capitulosPics/tranformaciones2D26b.jpg';

class Tranformaciones2D26 extends Component {
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
								Tranformaciones2D - TandGo - Aprende a programar con Html Css JavaScript jQuery
								Bootstrap
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
						<h1 className="h1__tituloCapitulos">Tranformaciones 2D</h1>
						<h1 className="h1__tituloCapitulos">Rotate</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este ejemplo rotará el div 45 grados en el
							sentido de las agujas del reloj. El centro de rotación está en el centro del div, 50% desde
							la izquierda y 50% desde arriba. Puede cambiar el centro de rotación estableciendo la
							propiedad transform-origin.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform-origin: 100% 50%;</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El
							ejemplo anterior establecerá el centro de rotación en la mitad del extremo del lado derecho.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="200"
								alt="Tranformaciones2D"
								data-caption="Tranformaciones2D"
								src={tranformaciones2D26}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Scale (Escala)</h1>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="200"
								alt="Tranformaciones2D"
								data-caption="Tranformaciones2D"
								src={tranformaciones2D26a}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este
							ejemplo escalará el div a 100px * 0.5 = 50px en el eje X y a 100px * 1.3 = 130px en el eje
							Y. El centro de la transformación está en el centro del div, 50% desde la izquierda y 50%
							desde arriba.
						</p>
						<h1 className="h1__tituloCapitulos">SKEW (sesgar)</h1>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="200"
								alt="Tranformaciones2D"
								data-caption="Tranformaciones2D"
								src={tranformaciones2D26b}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este ejemplo sesgará el div en 20 grados en
							el eje X y en - 30 grados en el eje Y. El centro de la transformación está en el centro del
							div, 50% desde la izquierda y 50% desde arriba.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Tranformaciones2D26;
