import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import backgrounds5 from '../../../../styles/img/capitulosPics/backgrounds5.jpg';
import backgrounds5b from '../../../../styles/img/capitulosPics/backgrounds5b.jpg';
import backgrounds5c from '../../../../styles/img/capitulosPics/backgrounds5c.jpg';
import backgrounds5d from '../../../../styles/img/capitulosPics/backgrounds5d.jpg';

class Backgrounds5 extends Component {
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
								Backgrounds o Fondos Css - TandGo - Aprende a programar con Html Css JavaScript jQuery
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
						<h1 className="h1__tituloCapitulos">Backgrounds o Fondos en Css</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las propiedades de fondo de CSS se utilizan
							para definir los efectos de fondo de los elementos, como color de fondo, imagen de fondo,
							repetición de fondo, adjunto de fondo, posición de fondo.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="200"
								alt="El fondo de CSS se utilizan para definir los efectos de los elementos"
								data-caption="El fondo de CSS se utilizan para definir los efectos de los elementos"
								src={backgrounds5}
							/>
						</div>
						<p>Con CSS, un color suele especificarse mediante:</p>
						<p>• un nombre de color válido, como "rojo"</p>
						<p>• un valor HEX, como "# ff0000".</p>
						<p>• un valor RGB, como "rgb (255,0,0)"</p>
						<h1 className="h1__tituloCapitulos">Opacidad / Transparencia</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad opacity especifica la opacidad
							o transparencia de un elemento. Puede tomar un valor de 0,0 a 1,0. Cuanto menor sea el
							valor, más transparente:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="250"
								alt="La propiedad opacity especifica la opacidad o transparencia de un elemento"
								data-caption="La propiedad opacity especifica la opacidad o transparencia de un elemento"
								src={backgrounds5b}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">Propiedad Background-color</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad background-color establece el
							color de fondo de un elemento mediante un valor de color o mediante palabras clave, como
							transparent, inherit or initial (transparente, heredado o inicial).
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transparent (transparente), especifica que
							el color de fondo debe ser transparente. Esto es predeterminado. heredar, inherit(hereda)
							esta propiedad de su elemento padre.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Initial(inicial), establece esta propiedad
							en su valor predeterminado.
						</p>

						<h1 className="h1__tituloCapitulos">Imagen de fondo CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad background-image especifica una
							imagen para usar como fondo de un elemento.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="300"
								height="200"
								alt="Esta propiedad especifica una imagen para el fondo de un elemento"
								data-caption="La propiedad background-image especifica una imagen para el fondo de un elemento"
								src={backgrounds5c}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Repetición de fondo CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;De forma predeterminada, la
							background-imagepropiedad repite una imagen tanto horizontal como verticalmente.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Algunas imágenes deben repetirse solo
							horizontal o verticalmente, o se verán extrañas
						</p>
						<h1 className="h1__tituloCapitulos">Archivo adjunto de fondo CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La background-attachmentpropiedad especifica
							si la imagen de fondo debe desplazarse o ser fija (no se desplazará con el resto de la
							página):
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="200"
								alt="Esta propiedad especifica una imagen para el fondo de un elemento"
								data-caption="La propiedad background-image especifica una imagen para el fondo de un elemento"
								src={backgrounds5d}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para abraviar todas propiedades en una puede
							usar simplemente la propiedad background.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="200"
								alt="Esta propiedad especifica una imagen para el fondo de un elemento"
								data-caption="La propiedad background-image especifica una imagen para el fondo de un elemento"
								src={backgrounds5d}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La background-attachmentpropiedad especifica
							si la imagen de fondo debe desplazarse o ser fija (no se desplazará con el resto de la
							página):
						</p>
						<p>• background-color</p>
						<p>• background-image</p>
						<p>• background-repeat</p>
						<p>• background-attachment</p>
						<p>• background-position</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Backgrounds5;
