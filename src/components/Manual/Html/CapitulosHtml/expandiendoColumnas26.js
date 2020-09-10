import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import expandiendoColumnas26 from '../../../../styles/img/capitulosPics/expandiendoColumnas26.jpg';

class ExpandiendoColumnas26 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Expandiendo Columnas</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Expandiendo Columnas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Qué sucede si la tabla contiene datos que abarcan
							varias columnas?
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por ejemplo, un calendario personal podría tener eventos
							que abarcan varias horas o incluso varios días.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los datos pueden abarcar columnas usando el atributo
							colspan. Los atributos aceptan un número entero (mayor o igual a 1) para denotar el número
							de columnas que abarca.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="500"
								height="350"
								alt="Expandiendo las Columnas"
								data-caption="Expandiendo las Columnas"
								src={expandiendoColumnas26}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, los datos Fuera de la ciudad
							abarcan los encabezados de las tablas de lunes y martes utilizando el valor 2 (dos
							columnas). Los datos Volver a la ciudad aparecen solo bajo el encabezado Miércoles.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ExpandiendoColumnas26;
