import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import centrando6 from '../../../../styles/img/capitulosPics/centrando6.jpg';
import centrando6a from '../../../../styles/img/capitulosPics/centrando6a.jpg';
import centrando6b from '../../../../styles/img/capitulosPics/centrando6b.jpg';
import centrando6c from '../../../../styles/img/capitulosPics/centrando6c.jpg';


class Centering6 extends Component {
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
								Centering o centrando o Fondos Css - TandGo - Aprende a programar con Html Css
								JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Centering o Centrando contenido</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay varias formas de centrar elementos en el
							centro de un div o cuadro. Veremos algunos de ellas.
						</p>

						<h1 className="h1__tituloCapitulos">
							Una de las formas mas utilizadas es margen: 0 automático;
						</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los objetos se pueden centrar usando margin:
							0 auto; si son elementos de bloque y tienen un ancho definido.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="200"
								alt="Centrando los elementos con margin 0 automatic"
								data-caption="Centrando los elementos con margin 0 automatic"
								src={centrando6}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Usar alineación de texto</h1>

						<p>
							El tipo de centrado más común y sencillo es el de líneas de texto en un elemento. CSS tiene
							la regla text-align: center para este propósito:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="200"
								alt="Centrando los elementos con position"
								data-caption="Centrando los elementos con position"
								src={centrando6a}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Usando position: absolute </h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los márgenes automáticos, emparejados con
							valores de cero para los desplazamientos izquierdo y derecho o superior e inferior,
							centrarán un elemento absolutamente posicionado dentro de su padre.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="200"
								alt="Centrando usando position: absolute"
								data-caption="Centrando usando position: absolute"
								src={centrando6b}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">Usando FlexBox</h1>

                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flexbox se usa para hacer que los elementos se comporten de manera predecible cuando se usan con diferentes tamaños de pantalla y diferentes dispositivos de visualización. 
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proporciona una forma más eficiente de diseñar, alinear y distribuir el espacio entre los elementos del contenedor.
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Veremos Flexbox mas adelante, pero te mostramos un ejemplo de como centrar un elemento.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="400"
								alt="Centrando usando flexbox"
								data-caption="Centrando usando flexbox"
								src={centrando6c}
							/>
						</div>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estas son las formas mas comunes aunque hay más. Puedes recurrir a nuestros seccion de Apuntes para ver más.
						</p>

					</div>
				</div>
			</Fragment>
		);
	}
}

export default Centering6;
