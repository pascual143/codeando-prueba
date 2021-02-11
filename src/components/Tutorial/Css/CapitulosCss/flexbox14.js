import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import flexbox14 from '../../../../styles/img/capitulosPics/flexbox14.jpg';

class Flexbox14 extends Component {
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
								Flexbox - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Flexbox</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El módulo de caja flexible, o simplemente
							'flexbox' para abreviar, es un modelo de caja diseñado para interfaces de usuario, y permite
							a los usuarios alinear y distribuir el espacio entre los elementos de un contenedor de modo
							que los elementos se comporten de manera predecible cuando el diseño de la página debe
							adaptarse a diferentes elementos desconocidos tamaños de pantalla. Un contenedor flexible
							expande los artículos para llenar el espacio disponible y los encoge para evitar que se
							desborden.
						</p>
						<p>
							La característica clave de Flexbox es el hecho de que los elementos en un diseño flexible
							pueden crecer y encogerse. El espacio se puede asignar a los elementos mismos o distribuir
							entre los elementos o alrededor de ellos.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="450"
								alt="permite a los usuarios alinear y distribuir el espacio entre los elementos de un contenedor de modo
                                que los elementos se comporten de manera predecible cuando el diseño de la página debe
                                adaptarse a diferentes elementos desconocidos tamaños de pantalla"
								data-caption="permite a los usuarios alinear y distribuir el espacio entre los elementos de un contenedor de modo
                                que los elementos se comporten de manera predecible cuando el diseño de la página debe
                                adaptarse a diferentes elementos desconocidos tamaños de pantalla"
								src={flexbox14}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Propiedades de CSS3 Flexbox</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A continuación se muestra una lista de
							propiedades de CSS3 Flexbox:
						</p>

						<h1 className="h1__tituloCapitulos">Descripción de la propiedad</h1>

						<p>
							display se utiliza para especificar el tipo de cuadro utilizado para un elemento html.
							flex-direction se utiliza para especificar la dirección de los elementos flexibles dentro de
							un contenedor flexible.
						</p>
                        <p>• <strong>justify-content</strong> se utiliza para alinear los elementos flexibles horizontalmente cuando los elementos no utilizan todo el espacio disponible en el eje principal.</p>
                        <p>• <strong>align-items</strong> se utiliza para alinear los elementos flexibles verticalmente cuando los elementos no utilizan todo el espacio disponible en el eje transversal.</p>
                        <p>• <strong>align-content</strong> se utiliza para modificar el comportamiento de la propiedad </p>
                        <p>• <strong>flex-wrap</strong> es similar a align-items, pero en lugar de alinear elementos flexibles, alinea líneas flexibles.</p>
                        <p>• <strong>flex-flow</strong> especifica una propiedad abreviada para flex-direction y flex-wrap. Orden especifica el orden de un artículo flexible en relación con el resto de los artículos flexibles dentro del mismo contenedor.</p>
                        <p>• <strong>align-self</strong> se utiliza en elementos flexibles. anula la propiedad align-items del contenedor.</p>
                        <p>• <strong>flex</strong> especifica la longitud de un elemento flexible, en relación con el resto de los elementos flexibles dentro del mismo contenedor.</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Flexbox14;
