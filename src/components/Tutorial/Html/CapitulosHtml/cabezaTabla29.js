import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import cabezaTabla29 from '../../../../styles/img/capitulosPics/cabezaTabla29.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class CabezaTabla29 extends Component {
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
							<title>Cabeza de la tabla o head de la Tabla - Aprende codigo con Codeando Html Css bootstrap JavaScript jQuery</title>
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
						<h1 className="h1__tituloCapitulos">Cabeza o head de la Tabla</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el último ejercicio, los encabezados de la mesa se
							mantuvieron dentro del cuerpo de la mesa. Sin embargo, cuando el cuerpo de una tabla se
							secciona, también tiene sentido seccionar los encabezados de la tabla utilizando el elemento{' '}
							<code>&lt;thead&gt;</code>.
						</p>
						<br />
						<div style={{ margin: '40px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="450"
								height="400"
								alt="Cabeza o head de la Tabla"
								data-caption="cabeza o head de la Tabla"
								src={cabezaTabla29}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, el único elemento nuevo es{' '}
							<code>&lt;thead&gt;</code>. Los encabezados de la tabla están contenidos dentro de este
							elemento. Tenga en cuenta que el encabezado de la tabla aún requiere una fila para contener
							los encabezados de la tabla.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CabezaTabla29;
