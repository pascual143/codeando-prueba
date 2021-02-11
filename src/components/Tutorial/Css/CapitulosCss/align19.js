import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuTutorialCss from '../../../MenusTutorial/Css/menuTutorialCss';
import align19 from '../../../../styles/img/capitulosPics/align19.jpg';
import align19a from '../../../../styles/img/capitulosPics/align19a.jpg';
import align19b from '../../../../styles/img/capitulosPics/align19b.jpg';

class Align19 extends Component {
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
							<title>Align - TandGo - Aprende a programar con Html Css JavaScript jQuery Bootstrap</title>
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
						<h1 className="h1__tituloCapitulos">Alineamineto - Align</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para centrar horizontalmente un elemento de
							bloque (como <code>&lt;div&gt;</code>), use margin: auto;
						</p>

						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Establecer el ancho del elemento evitará que
							se estire hasta los bordes de su contenedor.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento ocupará el ancho especificado y
							el espacio restante se dividirá en partes iguales entre los dos márgenes:
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="270"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={align19}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Center Align Text</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para centrar el texto dentro de un elemento,
							utiliza text-align: center;
						</p>
						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="270"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={align19a}
							/>
						</div>

						<h1 className="h1__tituloCapitulos">Centrar una imagen</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para centrar una imagen, establezca el
							margen izquierdo y derecho en automático y conviértalo en un elemento de bloque:
						</p>

						<div style={{ margin: '20px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="400"
								height="270"
								alt="Alineamiento o align"
								data-caption="Alineamiento o align"
								src={align19b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Align19;
