import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import footerTabla30 from '../../../../styles/img/capitulosPics/footerTabla30.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class FooterTabla30 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Pie de la tabla o Footer de la Tabla - Aprende codigo con Codeando Html Css bootstrap JavaScript jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Pide de la tabla o Footer de la Tabla</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La parte inferior de una tabla larga también se puede seccionar usando el elemento <code>&lt;tfoot&gt;</code>.
						</p>
						<br />
						<div style={{ margin: '40px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="650"
								height="550"
								alt="Pie de tabla o footer de la Tabla"
								data-caption="Pie de tabla o footer de la Tabla"
								src={footerTabla30}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, el pie de página contiene los totales de los datos en la tabla. Los pies de página a menudo se usan para contener sumas, diferencias y otros resultados de datos.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FooterTabla30;
