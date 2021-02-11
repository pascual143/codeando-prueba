import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import posicionamiento17 from '../../../../styles/img/capitulosPics/posicionamiento17.jpg';
import posicionamiento17a from '../../../../styles/img/capitulosPics/posicionamiento17a.jpg';
import posicionamiento17b from '../../../../styles/img/capitulosPics/posicionamiento17b.jpg';
import posicionamiento17c from '../../../../styles/img/capitulosPics/posicionamiento17c.jpg';



class Posicionamiento17 extends Component {
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
								Posicionamiento - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap
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
						<h1 className="h1__tituloCapitulos">Posicionamiento</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad de posición especifica el tipo
							de método de posicionamiento utilizado para un elemento (estático, relativo, fijo, absoluto
							o fijo).
						</p>

						<h1 className="h1__tituloCapitulos">La propiedad de la posición</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La propiedad de posición especifica el tipo
							de método de posicionamiento utilizado para un elemento.
						</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay cinco valores de posición diferentes:</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• static</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• relative</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• fixed</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• absolute</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• sticky</p>

						<h1 className="h1__tituloCapitulos">posición: static;</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los elementos HTML se colocan estáticos de
							forma predeterminada.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los elementos de posición estática no se ven
							afectados por las propiedades superior, inferior, izquierda y derecha.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento con posición: estático; no se
							coloca de ninguna manera especial; siempre se posiciona de acuerdo con el flujo normal de la
							página:
						</p>

						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="opacity"
								data-caption="opacity"
								src={posicionamiento17}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">posición: relative;</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento con posición: relativa; está
							posicionado con relación a su posición normal.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Establecer las propiedades superior,
							derecha, inferior e izquierda de un elemento en una posición relativa hará que se ajuste
							lejos de su posición normal. El resto del contenido no se ajustará para encajar en ningún
							espacio dejado por el elemento.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="opacity"
								data-caption="opacity"
								src={posicionamiento17a}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">posición: fixed;</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento con posición: fijo; se coloca en relación con la ventana gráfica, lo que significa que siempre permanece en el mismo lugar incluso si se desplaza la página. Las propiedades superior, derecha, inferior e izquierda se utilizan para colocar el elemento.
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento fijo no deja un hueco en la página donde normalmente se hubiera ubicado.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="opacity"
								data-caption="opacity"
								src={posicionamiento17b}
							/>
						</div>
                        <h1 className="h1__tituloCapitulos">posición: absoluta;</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento con posición: absoluta; se posiciona en relación con el antepasado posicionado más cercano (en lugar de posicionado en relación con la ventana gráfica, como fijo).
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sin embargo; si un elemento de posición absoluta no tiene antepasados posicionados, utiliza el cuerpo del documento y se mueve junto con el desplazamiento de la página.
						</p>
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nota: Un elemento "posicionado" es aquel cuya posición es cualquier cosa excepto estática.
						</p>
                        <div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="200"
								alt="opacity"
								data-caption="opacity"
								src={posicionamiento17c}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Posicionamiento17;
