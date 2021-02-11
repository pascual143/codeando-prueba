import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import color15 from '../../../../styles/img/capitulosPics/color15.jpg';
import color15a from '../../../../styles/img/capitulosPics/color15a.jpg';
import color15b from '../../../../styles/img/capitulosPics/color15b.jpg';
import color15c from '../../../../styles/img/capitulosPics/color15c.jpg';
import color15d from '../../../../styles/img/capitulosPics/color15d.jpg';


class Color15 extends Component {
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
							<title>Color - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Color</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En CSS, los colores también se pueden
							especificar usando valores RGB, valores HEX, valores HSL, valores RGBA y valores HSLA:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="100"
								alt="Formas de expresar los colores en css"
								data-caption="Formas de expresar los colores en css"
								src={color15}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La mayoría de los navegadores admiten el uso
							de palabras clave de color para especificar un color. Por ejemplo, para establecer el color
							de un elemento en azul, use la palabra clave azul:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="150"
								alt="Formas de expresar los colores en css ejemplo"
								data-caption="Formas de expresar los colores en css ejemplo"
								src={color15a}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">rgb () Notación</h1>

						<p>
							RGB es un modelo de color aditivo que representa los colores como mezclas de luz roja, verde
							y azul. En esencia, la representación RGB es el equivalente decimal de la notación
							hexadecimal. En hexadecimal, cada número varía de 00-FF, que es equivalente a 0-255 en
							decimal y 0% -100% en porcentajes.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="200"
								alt="Formas de expresar los colores en css por porcentajes y escalar"
								data-caption="Formas de expresar los colores en css por porcentajes y escalar"
								src={color15b}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">rgb () Opacidad</h1>

						<p>Similar a la notación rgb (), pero con un valor alfa (opacidad) adicional.</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="200"
								alt="Formas de expresar los colores en css por porcentajes y escalar"
								data-caption="Formas de expresar los colores en css por porcentajes y escalar"
								src={color15c}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Valor hexadecimal</h1>

						<p>
							Los colores CSS también se pueden representar como un triplete hexadecimal, donde los
							miembros representan los componentes rojo, verde y azul de un color. Cada uno de estos
							valores representa un número en el rango de 00 a FF, o de 0 a 255 en notación decimal. Se
							pueden usar valores hexadecimales en mayúsculas y / o minúsculas (es decir, # 3fc = # 3FC =
							# 33ffCC). El navegador interpreta # 369 como # 336699. Si eso no es lo que pretendía sino
							que deseaba # 306090, debe especificarlo explícitamente.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="150"
								alt="Formas de expresar los colores en css por porcentajes y escalar"
								data-caption="Formas de expresar los colores en css por porcentajes y escalar"
								src={color15d}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Color15;
