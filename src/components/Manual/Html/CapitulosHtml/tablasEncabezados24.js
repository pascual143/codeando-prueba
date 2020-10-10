import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import tablasEncabezados24 from '../../../../styles/img/capitulosPics/tablasEncabezados24.jpg';
import tablasEncabezados24b from '../../../../styles/img/capitulosPics/tablasEncabezados24b.jpg';


class TablasEncabezados24 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Encabezado de Tablas</title>
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Encabezado de Tablas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los datos de la tabla no tienen mucho sentido sin títulos para describir lo que representan los datos. Para ello vamos a  usar el elemento de encabezado de tabla: <code>&lg;th&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al igual que los datos de la tabla, un encabezado de la tabla debe colocarse dentro de una fila de la tabla.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al principio, el código HTML para tablas puede parecer un poco extraño, pero analizarlo pieza por pieza ayuda a que el código sea más comprensible.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="550"
								height="400"
								alt="Encabezados de las tablas"
								data-caption="Encabezados de las tablas"
								src={tablasEncabezados24}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¿Qué pasó en el código de arriba?
						</p>
                        <br />
                        <p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primero, se agregamos una nueva fila para contener los tres encabezados: un encabezado en blanco, un encabezado de sábado y un encabezado de domingo. El encabezado en blanco crea la celda de tabla adicional necesaria para alinear los encabezados de tabla correctamente sobre los datos a los que corresponden.
						</p>
                        <br />
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En la segunda fila, se agregó un encabezado de tabla como título de la fila: Temperatura.
                        </p>
                        <br />
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tenga en cuenta, también, el uso del atributo de alcance, que puede tomar uno de dos valores:
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- row: este valor deja en claro que el encabezado es para una fila.
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- col: este valor deja en claro que el encabezado es para una columna.
                        </p>
                        <br />
                        <div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="550"
								height="350"
								alt="Resultado del encabezados de las tablas"
								data-caption="Resultado del encabezados de las tablas"
								src={tablasEncabezados24b}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default TablasEncabezados24;
