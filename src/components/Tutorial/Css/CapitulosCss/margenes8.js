import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import margenes8 from '../../../../styles/img/capitulosPics/margenes8.jpg';
import margenes8a from '../../../../styles/img/capitulosPics/margenes8a.jpg';
import margenes8b from '../../../../styles/img/capitulosPics/margenes8b.jpg';


class Margenes8 extends Component {
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
								Magenes Margins - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Margenes (Margins)</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad Margen CSS se utiliza para
							definir el espacio alrededor de los elementos. Es completamente transparente y no tiene
							color de fondo. Limpia un área alrededor del elemento.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los márgenes superior, inferior, izquierdo y
							derecho se pueden cambiar de forma independiente utilizando propiedades independientes.
							También puede cambiar todas las propiedades a la vez utilizando la propiedad de margen
							abreviado.
						</p>
                        <p>Todas las propiedades de los márgenes pueden tener los siguientes valores:</p>
						<p>• auto: el navegador calcula el margen</p>
						<p>• longitud : especifica un margen en px, pt, cm, etc.</p>
						<p>• % : especifica un margen en% del ancho del elemento contenedor</p>
                        <p>• inherit: especifica que el margen debe heredarse del elemento principal</p>

						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="350"
								height="180"
								alt="Los margenes se utiliza para designar el espacio alrededor de los elementos"
								data-caption="Los margenes se utiliza para designar el espacio alrededor de los elementos"
								src={margenes8}
							/>
						</div>
                        <p>Para acortar el código, es posible especificar todas las propiedades de los márgenes en una propiedad.</p>
                        <p>La margin propiedad es una propiedad abreviada de las siguientes propiedades de margen individuales:</p>
                        <p>• margin-top</p>
						<p>• margin-right</p>
						<p>• margin-bottom</p>
                        <p>• margin-left</p>
                        <p>Si la marginpropiedad tiene cuatro valores:</p>
                        <p>•	margen: 25px 50px 75px 100px;</p>
                        <p>&nbsp;&nbsp;o	el margen superior es de 25px</p>
                        <p>&nbsp;&nbsp;o	el margen derecho es 50px</p>
                        <p>&nbsp;&nbsp;o	el margen inferior es 75px</p>
                        <p>&nbsp;&nbsp;o	el margen izquierdo es 100px</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="Los margenes se utiliza para designar el espacio alrededor de los elementos"
								data-caption="Los margenes se utiliza para designar el espacio alrededor de los elementos"
								src={margenes8a}
							/>
						</div>

                        <h1 className="h1__tituloCapitulos">El valor Automatico(margin: auto)</h1>
                        <p>Puede establecer la propiedad margin en auto para centrar horizontalmente el elemento dentro de su contenedor.</p>
                        
                        <h1 className="h1__tituloCapitulos">Margenes (Margins)</h1>
                        <p>Muchas de las propiedades CSS heredan su valor "de padres a hijos", lo que permite no tener que establecer el valor de todas las propiedades CSS para todos los elementos de la página.</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="600"
								height="450"
								alt="Inherit. Los margenes se utiliza para designar el espacio alrededor de los elementos"
								data-caption="Inherit. Los margenes se utiliza para designar el espacio alrededor de los elementos"
								src={margenes8b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Margenes8;
