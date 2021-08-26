import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialJavaScript from '../../../MenusTutorial/JavaScript/menuTutorialJavaScript';
import numerosJavascript1 from '../../../../styles/img/capitulosPics/numerosJavascript1.jpg';
import mathJavascript2 from '../../../../styles/img/capitulosPics/mathJavascript2.jpg';
import infinityJavascript4 from '../../../../styles/img/capitulosPics/infinityJavascript4.jpg';
import isNanJavascript3 from '../../../../styles/img/capitulosPics/isNanJavascript3.jpg';

class Number5 extends Component {
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
							<title>Numeros - TandGo - Aprende a programar con Html Css JavaScript jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
						<div className="left_section menu_left">
							<div className="left_section" style={{ margin: '10px' }}>
								<MenuTutorialJavaScript />
							</div>
						</div>
					</nav>
					<div>
						<h1 className="h1__tituloCapitulos">Numeros en JavaScript (Number)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;El tipo Number se utiliza para el tratamiento de numeros enteros, decimales o exponenciales.
						</p>
                        <h1 className="h1__tituloCapitulos">Aritmetica</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;Se admiten todos los operadores aritméticos estándar, incluido el módulo:
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="300"
								alt="numeros en javascript"
								data-caption="numeros en javascript"
								src={numerosJavascript1}
							/>
						</div>
						<br />
                        <h1 className="h1__tituloCapitulos">Math (matematicas)</h1>

						<p>&nbsp;&nbsp;&nbsp;&nbsp;El objeto Math incorporado tiene una funcionalidad más avanzada que incluye raíz cuadrada, redondeo, π y un generador aleatorio:</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="450"
								alt="Tipos de datos en javascript con console.log"
								data-caption="Tipos de datos en javascript con console.log"
								src={mathJavascript2}
							/>
						</div>
                        <br />
                        <h1 className="h1__tituloCapitulos">NaN (not a number - no es un numero)</h1>

						<p>&nbsp;&nbsp;&nbsp;&nbsp;Hay un valor especial NaN que significa que no es un número. Esto se devolverá cuando una operación matemática no se pueda realizar correctamente, por ejemplo, al intentar multiplicar un número con una cadena. Puede probar NaN con la función isNaN:</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="270"
								alt="Valor especial de numeros en Javascript"
								data-caption="Valor especial de numeros en Javascript"
								src={isNanJavascript3}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">Infinity</h1>

						<p>&nbsp;&nbsp;&nbsp;&nbsp;Otro valor especial es Infinity. Puede probar Infinity con isFinite:</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="700"
								height="250"
								alt="Infinite como valor especial de numeros en Javascript"
								data-caption="Infinite como valor especial de numeros en Javascript"
								src={infinityJavascript4}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Number5;