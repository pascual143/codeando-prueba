import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import borders10 from '../../../../styles/img/capitulosPics/borders10.jpg';
import borders10a from '../../../../styles/img/capitulosPics/borders10a.jpg';
import borders10b from '../../../../styles/img/capitulosPics/borders10b.jpg';

class Borders10 extends Component {
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
								Borders - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Borders</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Establece algunas o todas las propiedades de
							todos los bordes de los elementos.
						</p>

						<h1 className="h1__tituloCapitulos">Bordes-radius</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad border-radius le permite
							cambiar la forma del modelo de caja básico.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cada esquina de un elemento puede tener
							hasta dos valores, para el radio vertical y horizontal de esa esquina (para un máximo de 8
							valores).
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El primer conjunto de valores define el
							radio horizontal. El segundo conjunto de valores opcional, precedido por una "/", define el
							radio vertical. Si solo se proporciona un conjunto de valores, se utiliza tanto para el
							radio vertical como para el horizontal.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="200"
								alt="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								data-caption="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								src={borders10}
							/>
						</div>
						<p>
							Debido a que border-radius acepta porcentajes, es común usar 50% para evitar calcular
							manualmente el valor de border-radius:
						</p>
						<p>
							Si las propiedades de ancho y alto no son iguales, la forma resultante será un óvalo en
							lugar de un círculo. Ejemplo de radio de borde específico del navegador:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="300"
								alt="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								data-caption="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								src={borders10a}
							/>
						</div>

						<p>
							La propiedad border-style establece el estilo del borde de un elemento. Esta propiedad puede
							tener de uno a cuatro valores (para cada lado del elemento un valor).{' '}
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="200"
								alt="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								data-caption="La propiedad de relleno establece el espacio de relleno en todos los lados de un elemento"
								src={borders10b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Borders10;
