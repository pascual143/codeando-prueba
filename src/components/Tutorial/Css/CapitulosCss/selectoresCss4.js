import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import selectorCssId3 from '../../../../styles/img/capitulosPics/selectorCssId3.jpg';
import selectorCssClasses3 from '../../../../styles/img/capitulosPics/selectorCssClasses3.jpg';
import selectorCssUniversal3 from '../../../../styles/img/capitulosPics/selectorCssUniversal3.jpg';
import selectorCssAgrupacion3 from '../../../../styles/img/capitulosPics/selectorCssAgrupacion3.jpg';


class SelectoresCss4 extends Component {
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
								Selectores Css - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Selectores Css</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los selectores de CSS identifican elementos
							HTML específicos como destinos para estilos CSS. Este tema cubre cómo los selectores CSS
							apuntan a elementos HTML. Los selectores utilizan una amplia gama de más de 50 métodos de
							selección ofrecidos por el lenguaje CSS, incluidos elementos, clases, ID, pseudoelementos y
							pseudoclases y patrones.
						</p>
						<p>Podemos dividir los selectores de CSS en cinco categorías:</p>
						<p>• Selectores simples (seleccione elementos basados en nombre, identificación, clase).</p>
						<p>
							• Selectores de combinador (seleccione elementos en función de una relación específica entre
							ellos).
						</p>
						<p>• Selectores de pseudo-clase (seleccione elementos basados en un cierto estado).</p>
						<p>
							• Selectores de pseudo-elementos (seleccionar y aplicar estilo a una parte de un elemento).
						</p>
						<p>
							• Selectores de atributos (seleccione elementos basados en un atributo o valor de atributo).
						</p>
						<h1 className="h1__tituloCapitulos">El selector de id de CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El selector de id utiliza el atributo id de
							un elemento HTML para seleccionar un elemento específico.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La identificación de un elemento es única
							dentro de una página, por lo que el selector de identificación se utiliza para seleccionar
							un elemento único.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para seleccionar un elemento con una
							identificación específica, escriba un carácter de almohadilla (#), seguido de la
							identificación del elemento.
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="300"
								alt="El selector de id utiliza el atributo id de un elemento HTML para seleccionar un elemento específico."
								data-caption="El selector de id utiliza el atributo id de un elemento HTML para seleccionar un elemento específico."
								src={selectorCssId3}
							/>
						</div>
						<h1 className="h1__tituloCapitulos">El selector de Classes de CSS</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El selector de clases selecciona elementos HTML con un atributo de clase específico.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para seleccionar elementos con una clase específica, escriba un carácter de punto (.), Seguido del nombre de la clase.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="300"
								alt="El selector de clases selecciona elementos HTML con un atributo de clase específico."
								data-caption="El selector de clases selecciona elementos HTML con un atributo de clase específico."
								src={selectorCssClasses3}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">El selector universal de CSS</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El selector universal (*) selecciona todos los elementos HTML de la página.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="300"
								alt="El selector universal (*) selecciona todos los elementos HTML de la página"
								data-caption="El selector universal (*) selecciona todos los elementos HTML de la página"
								src={selectorCssUniversal3}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">El selector de agrupación CSS</h1>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El selector de agrupación selecciona todos los elementos HTML con las mismas definiciones de estilo.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para seleccionar elementos con una clase específica, escriba un carácter de punto (.), Seguido del nombre de la clase.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="280"
								alt="El selector de clases selecciona elementos HTML con un atributo de clase específico."
								data-caption="El selector de clases selecciona elementos HTML con un atributo de clase específico."
								src={selectorCssAgrupacion3}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SelectoresCss4;
